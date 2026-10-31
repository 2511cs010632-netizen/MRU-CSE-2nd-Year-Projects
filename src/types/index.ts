export type Language = "en" | "te" | "hi";

export type UserRole = "farmer" | "buyer" | "expert" | "admin";

export interface UserProfile {
  uid: string;
  name: string;
  role: UserRole;
  phone?: string;
  village?: string;
  district?: string;
  state?: string;
  preferredLanguage: Language;
  farmSizeAcres?: number;
  primaryCrops?: string[];
  createdAt: string;
}

export interface CropDiseaseResult {
  id: string;
  cropName: string;
  diseaseName: string;
  confidence: number;
  severity: "low" | "medium" | "high";
  recommendations: string[];
  imageUrl: string;
  detectedAt: string;
}

export interface WeatherForecast {
  location: string;
  date: string;
  tempMinC: number;
  tempMaxC: number;
  condition: string;
  humidityPercent: number;
  rainfallChancePercent: number;
  windSpeedKmh: number;
  advisory?: string;
}

export interface MarketPrice {
  id: string;
  cropName: string;
  market: string;
  state: string;
  pricePerQuintal: number;
  unit: "quintal" | "kg" | "ton";
  date: string;
  trend: "up" | "down" | "stable";
}

export interface MarketplaceListing {
  id: string;
  farmerId: string;
  farmerName: string;
  cropName: string;
  quantityKg: number;
  pricePerKg: number;
  location: string;
  imageUrl?: string;
  status: "available" | "reserved" | "sold";
  createdAt: string;
}

export interface LogisticsRequest {
  id: string;
  listingId: string;
  pickupLocation: string;
  dropLocation: string;
  quantityKg: number;
  status: "requested" | "confirmed" | "in-transit" | "delivered" | "cancelled";
  estimatedCost?: number;
  createdAt: string;
}

export interface ExpertConsultation {
  id: string;
  farmerId: string;
  expertId?: string;
  topic: string;
  description: string;
  status: "open" | "assigned" | "resolved";
  createdAt: string;
}

export interface GovScheme {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  benefitAmount?: string;
  applyUrl: string;
  state?: string;
  category: "subsidy" | "insurance" | "loan" | "training" | "other";
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  language: Language;
  createdAt: string;
}
