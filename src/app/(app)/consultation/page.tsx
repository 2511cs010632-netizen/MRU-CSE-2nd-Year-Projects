import { MessageCircle, Plus } from "lucide-react";
import type { ExpertConsultation } from "@/types";

async function getConsultations(): Promise<ExpertConsultation[]> {
  // TODO: Replace with a Firestore query scoped to the current user.
  return [
    { id: "1", farmerId: "f1", expertId: "e1", topic: "Soil pH imbalance", description: "My cotton field soil test shows pH 8.4, what corrective steps should I take?", status: "assigned", createdAt: new Date().toISOString() },
    { id: "2", farmerId: "f1", topic: "Irrigation scheduling", description: "Best drip irrigation frequency for turmeric during summer?", status: "open", createdAt: new Date().toISOString() }
  ];
}

const STATUS_STYLE = {
  open: "bg-amber-100 text-amber-700",
  assigned: "bg-blue-100 text-blue-700",
  resolved: "bg-primary-100 text-primary-700"
} as const;

export default async function ConsultationPage() {
  const consultations = await getConsultations();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">Expert Consultation</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Get advice from agronomists and agriculture experts.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
          <Plus className="h-4 w-4" /> Ask a Question
        </button>
      </div>

      <div className="space-y-4">
        {consultations.map((c) => (
          <div key={c.id} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary-50 p-2">
                  <MessageCircle className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{c.topic}</p>
                  <p className="mt-1 max-w-lg text-sm text-neutral-500">{c.description}</p>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${STATUS_STYLE[c.status]}`}>
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
