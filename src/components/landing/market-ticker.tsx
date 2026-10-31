import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const TICKER_ITEMS = [
  { crop: "Cotton", market: "Warangal", price: "₹7,200", trend: "up" as const },
  { crop: "Turmeric", market: "Nizamabad", price: "₹12,500", trend: "up" as const },
  { crop: "Chilli", market: "Guntur", price: "₹16,800", trend: "down" as const },
  { crop: "Paddy", market: "Nizamabad", price: "₹2,150", trend: "stable" as const },
  { crop: "Maize", market: "Karimnagar", price: "₹1,980", trend: "up" as const }
];

function TickerRow() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {TICKER_ITEMS.map((item, i) => (
        <div key={i} className="flex items-center gap-2 whitespace-nowrap font-mono text-sm">
          <span className="text-turmeric-200">{item.crop}</span>
          <span className="text-field-300/60">· {item.market}</span>
          <span className="font-medium text-white">{item.price}</span>
          {item.trend === "up" && <ArrowUpRight className="h-3.5 w-3.5 text-field-300" />}
          {item.trend === "down" && <ArrowDownRight className="h-3.5 w-3.5 text-soil-300" />}
        </div>
      ))}
    </div>
  );
}

export function MarketTicker() {
  return (
    <div className="overflow-hidden border-y border-field-700/60 bg-field-900 py-3">
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        <TickerRow />
        <TickerRow />
      </div>
    </div>
  );
}
