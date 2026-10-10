import {
	defineEventHandler,
	readBody,
	createError,
	getCookie,
	setCookie,
} from "h3";
import type { H3Event } from "h3";
import type { AiRequestFormat, AiResponseFormat } from "~/types";
import { openRouterAi, geminiAi } from "../../utils";

const DAILY_AI_REQUEST_LIMIT = 20;
const AI_USAGE_COOKIE_NAME = "dragzy_ai_usage";

function enforceDailyAiRequestLimit(event: H3Event) {
	const todayDateString = new Date().toISOString().slice(0, 10); // e.g. 2026-10-10
	const savedCookieValue = getCookie(event, AI_USAGE_COOKIE_NAME);
	let requestsUsedToday = 0;

	if (savedCookieValue) {
		const [savedDateString, savedCountText] = savedCookieValue.split(":"); // e.g. 2026-10-10:3
		if (savedDateString === todayDateString) {
			requestsUsedToday = Number(savedCountText) || 0;
		}
	}

	if (requestsUsedToday >= DAILY_AI_REQUEST_LIMIT) {
		throw createError({
			statusCode: 429,
			statusMessage: "Daily AI request limit reached",
		});
	}

	setCookie(
		event,
		AI_USAGE_COOKIE_NAME,
		`${todayDateString}:${requestsUsedToday + 1}`,
		{
			httpOnly: true,
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24,
		}
	);
}

export default defineEventHandler(async function (
	event
): Promise<AiResponseFormat> {
	enforceDailyAiRequestLimit(event);

	const requestBody = await readBody<AiRequestFormat>(event);

	let aiRawContent;

	try {
		aiRawContent = await geminiAi({
			userPrompt: requestBody.userPrompt,
			userMarkup: requestBody.userMarkup,
			stylingFramework: requestBody.stylingFramework,
		});
	} catch (aiRequestError) {
		console.error(aiRequestError); // still logs in terminal
		throw createError({
			statusCode: 502,
			statusMessage: "AI request failed",
			data: import.meta.dev ? String(aiRequestError) : undefined, // details only in dev
		});
	}

	// content is empty or not a plain string
	if (typeof aiRawContent !== "string" || aiRawContent === "") {
		throw createError({
			statusCode: 502,
			statusMessage: "AI returned an empty response",
		});
	}

	try {
		return JSON.parse(aiRawContent);
	} catch (parseError) {
		// model returned malformed JSON
		throw createError({
			statusCode: 502,
			statusMessage: "AI returned invalid JSON",
		});
	}
});
