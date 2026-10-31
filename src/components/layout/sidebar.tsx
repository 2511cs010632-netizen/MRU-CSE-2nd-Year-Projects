"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Leaf,
  CloudSun,
  TrendingUp,
  Store,
  Truck,
  Users,
  FileBadge,
  BarChart3,
  Mic
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/crop-disease", label: "Crop Disease Detection", icon: Leaf },
  { href: "/weather", label: "Weather Forecast", icon: CloudSun },
  { href: "/market-prices", label: "Market Prices", icon: TrendingUp },
  { href: "/marketplace", label: "Marketplace", icon: Store },
  { href: "/logistics", label: "Transport & Logistics", icon: Truck },
  { href: "/consultation", label: "Expert Consultation", icon: Users },
  { href: "/schemes", label: "Government Schemes", icon: FileBadge },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/voice-assistant", label: "Voice Assistant", icon: Mic }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-neutral-200 bg-white md:flex md:flex-col">
      <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-5">
        <Leaf className="h-6 w-6 text-field-600" />
        <span className="font-display text-lg font-semibold text-neutral-900">AgriConnect</span>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname?.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-field-50 text-field-700"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              )}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-turmeric-400" />
              )}
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
