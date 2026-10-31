import { NextRequest, NextResponse } from "next/server";

// POST /api/chat
// Body: { message: string, language: "en" | "te" | "hi" }
// Wire this up to your AI provider (e.g. the Anthropic API) with a system prompt
// instructing it to answer in the requested language and stay scoped to farming topics.
export async function POST(req: NextRequest) {
  const { message, language } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  // TODO: Replace with a real call to your AI provider, e.g.:
  // const response = await fetch("https://api.anthropic.com/v1/messages", {
  //   method: "POST",
  //   headers: {
  //     "x-api-key": process.env.ANTHROPIC_API_KEY!,
  //     "anthropic-version": "2023-06-01",
  //     "content-type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     model: "claude-sonnet-4-6",
  //     max_tokens: 500,
  //     system: `You are AgriConnect's farming assistant. Reply in ${language}. Keep answers practical and specific to Indian agriculture.`,
  //     messages: [{ role: "user", content: message }]
  //   })
  // });

  return NextResponse.json({
    reply: "This is a placeholder reply. Connect this route to your AI provider to get real answers."
  });
}
