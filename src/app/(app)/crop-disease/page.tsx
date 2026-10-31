"use client";

import { useState } from "react";
import { UploadCloud, Loader2 } from "lucide-react";
import type { CropDiseaseResult } from "@/types";

export default function CropDiseasePage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CropDiseaseResult | null>(null);

  async function handleFile(file: File) {
    setPreview(URL.createObjectURL(file));
    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("/api/crop-disease", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Analysis failed");
      const data: CropDiseaseResult = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">Crop Disease Detection</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Upload a photo of the affected leaf or plant to get an instant AI diagnosis.
        </p>
      </div>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-white p-10 text-center hover:border-primary-400">
        <UploadCloud className="h-8 w-8 text-neutral-400" />
        <span className="mt-2 text-sm font-medium text-neutral-700">
          Click to upload or drag and drop
        </span>
        <span className="mt-1 text-xs text-neutral-400">PNG or JPG, up to 10MB</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
        />
      </label>

      {preview && (
        <div className="rounded-xl border border-neutral-200 bg-white p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt="Uploaded crop" className="mx-auto max-h-64 rounded-lg" />
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
          <Loader2 className="h-4 w-4 animate-spin" />
          Analyzing image...
        </div>
      )}

      {result && (
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-900">{result.diseaseName}</h2>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              {result.severity} severity
            </span>
          </div>
          <p className="mt-1 text-sm text-neutral-500">
            {result.cropName} • {Math.round(result.confidence * 100)}% confidence
          </p>
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-neutral-800">Recommendations</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-600">
              {result.recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
