import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import type { MarketPrice } from "@/types";
import { formatINR } from "@/lib/utils";

async function getPrices(): Promise<MarketPrice[]> {
  // TODO: Replace with a real fetch from /api/market-prices backed by Agmarknet or similar.
  return [
    { id: "1", cropName: "Cotton", market: "Warangal", state: "Telangana", pricePerQuintal: 7200, unit: "quintal", date: new Date().toISOString(), trend: "up" },
    { id: "2", cropName: "Paddy", market: "Nizamabad", state: "Telangana", pricePerQuintal: 2150, unit: "quintal", date: new Date().toISOString(), trend: "stable" },
    { id: "3", cropName: "Chilli", market: "Guntur", state: "Andhra Pradesh", pricePerQuintal: 16800, unit: "quintal", date: new Date().toISOString(), trend: "down" },
    { id: "4", cropName: "Maize", market: "Karimnagar", state: "Telangana", pricePerQuintal: 1980, unit: "quintal", date: new Date().toISOString(), trend: "up" },
    { id: "5", cropName: "Turmeric", market: "Nizamabad", state: "Telangana", pricePerQuintal: 12500, unit: "quintal", date: new Date().toISOString(), trend: "up" }
  ];
}

const TREND_ICON = { up: ArrowUpRight, down: ArrowDownRight, stable: Minus } as const;
const TREND_COLOR = { up: "text-primary-600", down: "text-red-600", stable: "text-neutral-400" } as const;

export default async function MarketPricesPage() {
  const prices = await getPrices();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">Live Market Prices</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Real-time mandi prices to help you decide when and where to sell.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-500">
            <tr>
              <th className="px-4 py-3 font-medium">Crop</th>
              <th className="px-4 py-3 font-medium">Market</th>
              <th className="px-4 py-3 font-medium">State</th>
              <th className="px-4 py-3 font-medium">Price / Quintal</th>
              <th className="px-4 py-3 font-medium">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {prices.map((p) => {
              const TrendIcon = TREND_ICON[p.trend];
              return (
                <tr key={p.id} className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium text-neutral-900">{p.cropName}</td>
                  <td className="px-4 py-3 text-neutral-600">{p.market}</td>
                  <td className="px-4 py-3 text-neutral-600">{p.state}</td>
                  <td className="px-4 py-3 text-neutral-900">{formatINR(p.pricePerQuintal)}</td>
                  <td className={`px-4 py-3 ${TREND_COLOR[p.trend]}`}>
                    <TrendIcon className="h-4 w-4" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
