import { ExternalLink, FileBadge } from "lucide-react";
import type { GovScheme } from "@/types";

async function getSchemes(): Promise<GovScheme[]> {
  // TODO: Replace with a curated Firestore collection, updated periodically.
  return [
    {
      id: "1",
      name: "PM-KISAN",
      description: "Direct income support of ₹6,000/year to eligible farmer families.",
      eligibility: ["Small and marginal landholding farmers", "Valid land records"],
      benefitAmount: "₹6,000/year",
      applyUrl: "https://pmkisan.gov.in",
      category: "subsidy"
    },
    {
      id: "2",
      name: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme protecting farmers against yield loss due to natural calamities.",
      eligibility: ["Farmers growing notified crops", "Both loanee and non-loanee farmers"],
      applyUrl: "https://pmfby.gov.in",
      category: "insurance"
    },
    {
      id: "3",
      name: "Kisan Credit Card",
      description: "Short-term credit for cultivation, post-harvest expenses, and farm maintenance.",
      eligibility: ["Farmers, tenant farmers, sharecroppers"],
      applyUrl: "https://www.myscheme.gov.in/schemes/kcc",
      category: "loan"
    }
  ];
}

const CATEGORY_STYLE = {
  subsidy: "bg-primary-100 text-primary-700",
  insurance: "bg-blue-100 text-blue-700",
  loan: "bg-amber-100 text-amber-700",
  training: "bg-purple-100 text-purple-700",
  other: "bg-neutral-100 text-neutral-700"
} as const;

export default async function SchemesPage() {
  const schemes = await getSchemes();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">Government Schemes</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Personalized subsidy, insurance, and loan recommendations based on your profile.
        </p>
      </div>

      <div className="space-y-4">
        {schemes.map((s) => (
          <div key={s.id} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary-50 p-2">
                  <FileBadge className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-neutral-900">{s.name}</h2>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${CATEGORY_STYLE[s.category]}`}>
                      {s.category}
                    </span>
                  </div>
                  <p className="mt-1 max-w-xl text-sm text-neutral-500">{s.description}</p>
                  <ul className="mt-2 list-inside list-disc text-xs text-neutral-500">
                    {s.eligibility.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href={s.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1 rounded-lg border border-primary-200 px-3 py-1.5 text-xs font-medium text-primary-700 hover:bg-primary-50"
              >
                Apply <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
