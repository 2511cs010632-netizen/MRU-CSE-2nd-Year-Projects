import { NextRequest, NextResponse } from "next/server";

// GET /api/weather?lat=...&lon=...
// Wire this up to a weather provider using WEATHER_API_KEY.
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "lat and lon are required" }, { status: 400 });
  }

  // TODO: const res = await fetch(`${process.env.WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`);

  return NextResponse.json({ message: "Connect this route to your weather provider." });
}
