import { Leaf, CloudSun, TrendingUp, Store } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { Reveal } from "@/components/landing/reveal";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-neutral-900">Welcome back 👋</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Here&apos;s what&apos;s happening on your farm today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal delay={0}>
          <StatCard label="Active Crops" value="3" icon={Leaf} />
        </Reveal>
        <Reveal delay={0.06}>
          <StatCard
            label="Today's Forecast"
            value="31°C"
            icon={CloudSun}
            trend={{ value: "10% rain", positive: true }}
          />
        </Reveal>
        <Reveal delay={0.12}>
          <StatCard
            label="Best Market Price"
            value="₹2,450/qtl"
            icon={TrendingUp}
            trend={{ value: "4.2%", positive: true }}
          />
        </Reveal>
        <Reveal delay={0.18}>
          <StatCard label="Marketplace Listings" value="2" icon={Store} />
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">Quick Actions</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <a
              href="/crop-disease"
              className="rounded-lg border border-neutral-200 px-4 py-3 text-center font-medium text-neutral-700 hover:border-primary-300 hover:bg-primary-50"
            >
              Scan Crop for Disease
            </a>
            <a
              href="/marketplace"
              className="rounded-lg border border-neutral-200 px-4 py-3 text-center font-medium text-neutral-700 hover:border-primary-300 hover:bg-primary-50"
            >
              List Produce for Sale
            </a>
            <a
              href="/consultation"
              className="rounded-lg border border-neutral-200 px-4 py-3 text-center font-medium text-neutral-700 hover:border-primary-300 hover:bg-primary-50"
            >
              Ask an Expert
            </a>
            <a
              href="/schemes"
              className="rounded-lg border border-neutral-200 px-4 py-3 text-center font-medium text-neutral-700 hover:border-primary-300 hover:bg-primary-50"
            >
              Check Gov Schemes
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">Recent Alerts</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span className="text-neutral-600">
                Possible leaf blight detected on Field 2 tomato crop — review recommendations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
              <span className="text-neutral-600">
                Cotton prices up 4.2% in Warangal market this week.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              <span className="text-neutral-600">
                Moderate rainfall expected in the next 48 hours — plan irrigation accordingly.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
