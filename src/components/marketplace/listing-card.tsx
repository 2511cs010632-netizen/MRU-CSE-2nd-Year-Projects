import { MapPin } from "lucide-react";
import type { MarketplaceListing } from "@/types";
import { formatINR } from "@/lib/utils";

const STATUS_STYLE = {
  available: "bg-primary-100 text-primary-700",
  reserved: "bg-amber-100 text-amber-700",
  sold: "bg-neutral-200 text-neutral-600"
} as const;

export function ListingCard({ listing }: { listing: MarketplaceListing }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex h-36 items-center justify-center bg-earth-50 text-earth-300">
        {listing.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={listing.imageUrl} alt={listing.cropName} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm">No image</span>
        )}
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-neutral-900">{listing.cropName}</h3>
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLE[listing.status]}`}>
            {listing.status}
          </span>
        </div>
        <p className="text-sm text-neutral-500">{listing.quantityKg} kg available</p>
        <p className="text-lg font-semibold text-neutral-900">
          {formatINR(listing.pricePerKg)} <span className="text-sm font-normal text-neutral-500">/ kg</span>
        </p>
        <p className="flex items-center gap-1 text-xs text-neutral-500">
          <MapPin className="h-3 w-3" /> {listing.location}
        </p>
        <p className="text-xs text-neutral-400">by {listing.farmerName}</p>
      </div>
    </div>
  );
}
