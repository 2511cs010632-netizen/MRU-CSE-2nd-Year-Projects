"use client";

import { useState } from "react";
import type { Language } from "@/types";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "te", label: "తెలుగు" },
  { code: "hi", label: "हिन्दी" }
];

export function LanguageSwitcher() {
  const [current, setCurrent] = useState<Language>("en");

  return (
    <select
      value={current}
      onChange={(e) => setCurrent(e.target.value as Language)}
      className="rounded-md border border-neutral-200 bg-white px-2 py-1.5 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label="Select language"
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
