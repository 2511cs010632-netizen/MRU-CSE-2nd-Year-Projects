import { CloudSun, Droplets, Wind } from "lucide-react";
import type { WeatherForecast } from "@/types";

async function getForecast(): Promise<WeatherForecast[]> {
  // TODO: Replace with a real fetch to /api/weather backed by a weather provider.
  const today = new Date();
  return Array.from({ length: 5 }).map((_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    return {
      location: "Warangal, Telangana",
      date: date.toISOString(),
      tempMinC: 24 + (i % 3),
      tempMaxC: 33 + (i % 4),
      condition: i % 2 === 0 ? "Partly Cloudy" : "Light Rain",
      humidityPercent: 60 + i * 2,
      rainfallChancePercent: i % 2 === 0 ? 20 : 65,
      windSpeedKmh: 10 + i,
      advisory: i === 2 ? "Delay pesticide spraying — rain expected." : undefined
    };
  });
}

export default async function WeatherPage() {
  const forecast = await getForecast();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">Weather Forecast</h1>
        <p className="mt-1 text-sm text-neutral-500">{forecast[0]?.location}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {forecast.map((day) => (
          <div
            key={day.date}
            className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm"
          >
            <p className="text-xs font-medium text-neutral-500">
              {new Date(day.date).toLocaleDateString("en-IN", { weekday: "short" })}
            </p>
            <CloudSun className="mx-auto mt-2 h-8 w-8 text-primary-500" />
            <p className="mt-2 text-sm font-semibold text-neutral-900">
              {day.tempMaxC}° / {day.tempMinC}°
            </p>
            <p className="mt-1 text-xs text-neutral-500">{day.condition}</p>
            <div className="mt-3 flex items-center justify-center gap-3 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <Droplets className="h-3 w-3" /> {day.rainfallChancePercent}%
              </span>
              <span className="flex items-center gap-1">
                <Wind className="h-3 w-3" /> {day.windSpeedKmh} km/h
              </span>
            </div>
          </div>
        ))}
      </div>

      {forecast.some((d) => d.advisory) && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <h2 className="text-sm font-semibold text-amber-800">Farming Advisory</h2>
          <ul className="mt-2 space-y-1 text-sm text-amber-700">
            {forecast
              .filter((d) => d.advisory)
              .map((d) => (
                <li key={d.date}>{d.advisory}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
