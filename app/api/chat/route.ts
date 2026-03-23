import { streamText, convertToModelMessages } from "ai";
import { getWeather } from "./tools";
 
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
 
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
 
    const result = streamText({
      model: "openai/gpt-5-mini", // Fast model for real-time chat (immediate streaming, low latency)
          		system: "You are a helpful assistant.", // Initial basic prompt
      messages: await convertToModelMessages(messages),
      tools: { getWeather },
    });
 
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
 
    // Return a proper error response
    return new Response(
      JSON.stringify({
        error: "Failed to process chat request",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}