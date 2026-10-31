import { Plus } from "lucide-react";
import type { MarketplaceListing } from "@/types";
import { ListingCard } from "@/components/marketplace/listing-card";

async function getListings(): Promise<MarketplaceListing[]> {
  // TODO: Replace with a Firestore query, e.g. collection(db, "listings").
  return [
    { id: "1", farmerId: "f1", farmerName: "Ramesh Reddy", cropName: "Fresh Tomatoes", quantityKg: 500, pricePerKg: 22, location: "Warangal", status: "available", createdAt: new Date().toISOString() },
    { id: "2", farmerId: "f2", farmerName: "Lakshmi Devi", cropName: "Organic Turmeric", quantityKg: 200, pricePerKg: 145, location: "Nizamabad", status: "available", createdAt: new Date().toISOString() },
    { id: "3", farmerId: "f3", farmerName: "Suresh Naik", cropName: "Green Chillies", quantityKg: 150, pricePerKg: 38, location: "Guntur", status: "reserved", createdAt: new Date().toISOString() }
  ];
}

export default async function MarketplacePage() {
  const listings = await getListings();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">Marketplace</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Buy and sell directly — no middlemen, fair prices for everyone.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
          <Plus className="h-4 w-4" /> New Listing
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
