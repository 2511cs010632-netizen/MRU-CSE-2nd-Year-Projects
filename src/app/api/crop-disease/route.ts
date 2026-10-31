import { NextRequest, NextResponse } from "next/server";
import type { CropDiseaseResult } from "@/types";

// POST /api/crop-disease
// Accepts multipart/form-data with an "image" field.
// Wire this up to your AI vision model / crop disease detection service.
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const image = formData.get("image");

  if (!image || !(image instanceof File)) {
    return NextResponse.json({ error: "No image provided" }, { status: 400 });
  }

  // TODO: Replace with a real call to your image-analysis model, e.g.:
  // const buffer = Buffer.from(await image.arrayBuffer());
  // const prediction = await callCropDiseaseModel(buffer);

  const mockResult: CropDiseaseResult = {
    id: crypto.randomUUID(),
    cropName: "Tomato",
    diseaseName: "Early Blight",
    confidence: 0.91,
    severity: "medium",
    recommendations: [
      "Remove and destroy affected leaves to prevent spread.",
      "Apply a copper-based fungicide every 7–10 days.",
      "Avoid overhead watering; water at the base of the plant.",
      "Rotate crops next season to reduce soil-borne spores."
    ],
    imageUrl: "",
    detectedAt: new Date().toISOString()
  };

  return NextResponse.json(mockResult);
}
