import { Truck, MapPin, CheckCircle2, Clock } from "lucide-react";
import type { LogisticsRequest } from "@/types";

async function getRequests(): Promise<LogisticsRequest[]> {
  // TODO: Replace with a Firestore query scoped to the current user.
  return [
    { id: "1", listingId: "1", pickupLocation: "Warangal", dropLocation: "Hyderabad", quantityKg: 500, status: "in-transit", estimatedCost: 1200, createdAt: new Date().toISOString() },
    { id: "2", listingId: "2", pickupLocation: "Nizamabad", dropLocation: "Karimnagar", quantityKg: 200, status: "confirmed", estimatedCost: 650, createdAt: new Date().toISOString() }
  ];
}

const STATUS_ICON = {
  requested: Clock,
  confirmed: CheckCircle2,
  "in-transit": Truck,
  delivered: CheckCircle2,
  cancelled: Clock
} as const;

export default async function LogisticsPage() {
  const requests = await getRequests();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">Transport & Logistics</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Track pickups and deliveries for your marketplace orders.
        </p>
      </div>

      <div className="space-y-4">
        {requests.map((r) => {
          const Icon = STATUS_ICON[r.status];
          return (
            <div key={r.id} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary-50 p-2">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">
                      {r.pickupLocation} → {r.dropLocation}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-neutral-500">
                      <MapPin className="h-3 w-3" /> {r.quantityKg} kg
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium capitalize text-neutral-700">
                    {r.status.replace("-", " ")}
                  </span>
                  {r.estimatedCost && (
                    <p className="mt-1 text-xs text-neutral-500">Est. ₹{r.estimatedCost}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
