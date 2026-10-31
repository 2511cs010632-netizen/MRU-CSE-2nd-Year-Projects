import { NextResponse } from "next/server";

// GET /api/market-prices?crop=&state=
// Wire this up to Agmarknet / data.gov.in or another mandi price provider.
export async function GET() {
  // TODO: const res = await fetch(`${process.env.MARKET_PRICE_API_BASE_URL}/prices`, { headers: { "x-api-key": process.env.MARKET_PRICE_API_KEY! } });

  return NextResponse.json({ message: "Connect this route to your market price provider." });
}
