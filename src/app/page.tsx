import Link from "next/link";
import {
  Leaf,
  CloudSun,
  TrendingUp,
  Store,
  Truck,
  Users,
  FileBadge,
  Mic,
  Camera,
  Sparkles,
  ArrowRight,
  BarChart3
} from "lucide-react";
import { FieldIllustration } from "@/components/landing/field-illustration";
import { MarketTicker } from "@/components/landing/market-ticker";
import { Reveal } from "@/components/landing/reveal";

const FEATURES = [
  { icon: Leaf, title: "AI Crop Disease Detection", desc: "Photograph a leaf, get a diagnosis and a treatment plan in seconds." },
  { icon: CloudSun, title: "Real-Time Weather", desc: "Hyperlocal forecasts and advisories timed to your sowing calendar." },
  { icon: TrendingUp, title: "Live Market Prices", desc: "Mandi rates across states, so you know exactly where to sell." },
  { icon: Store, title: "Farmer-to-Buyer Marketplace", desc: "List your harvest and sell direct — no middlemen, better margins." },
  { icon: Truck, title: "Transport & Logistics", desc: "Book pickup and track delivery for every order, end to end." },
  { icon: Users, title: "Expert Consultation", desc: "Put a question to a real agronomist and hear back the same day." },
  { icon: FileBadge, title: "Government Schemes", desc: "Subsidy, loan, and insurance matches picked for your land and crop." },
  { icon: Mic, title: "Voice Assistant", desc: "Ask anything by voice — in English, Telugu, or Hindi." }
];

const STEPS = [
  {
    n: "01",
    icon: Camera,
    title: "Capture",
    desc: "Photograph a crop, speak a question, or check today's forecast — however it's easiest to reach us."
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Understand",
    desc: "AgriConnect's models read the image or question and return a clear, specific answer in your language."
  },
  {
    n: "03",
    icon: BarChart3,
    title: "Act",
    desc: "Apply the recommendation, list your harvest, or book transport — all from the same dashboard."
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-paper">
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-field-900">
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-turmeric-300" />
            <span className="font-display text-lg font-semibold text-white">AgriConnect</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="text-sm font-medium text-field-100 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-full bg-turmeric-400 px-5 py-2 text-sm font-semibold text-field-950 transition hover:bg-turmeric-300"
            >
              Get Started
            </Link>
          </div>
        </nav>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-16 pt-8 md:grid-cols-2 md:px-12 md:pb-24 md:pt-12">
          <div className="relative z-10 animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-turmeric-400/30 bg-turmeric-400/10 px-3 py-1 text-xs font-medium tracking-wide text-turmeric-200">
              <Sparkles className="h-3.5 w-3.5" /> Built for the fields of Telangana &amp; beyond
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white text-balance md:text-6xl">
              Every field has a story.
              <br />
              <span className="italic text-turmeric-300">We help you read it.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-field-100 md:text-lg">
              AI-powered crop diagnosis, live mandi prices, and a direct line to buyers and
              experts — in English, Telugu, and Hindi. Built so the person holding the phone
              matters more than the phone itself.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/auth/signup"
                className="group inline-flex items-center gap-2 rounded-full bg-turmeric-400 px-6 py-3 text-sm font-semibold text-field-950 transition hover:bg-turmeric-300"
              >
                Start Free
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-field-100/25 px-6 py-3 text-sm font-medium text-field-100 transition hover:border-field-100/50 hover:text-white"
              >
                View Demo Dashboard
              </Link>
            </div>

            {/* Floating stat pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              <div className="animate-drift rounded-2xl border border-field-100/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <p className="font-mono text-lg font-semibold text-white">91%</p>
                <p className="text-xs text-field-200">disease-scan accuracy</p>
              </div>
              <div
                className="animate-drift rounded-2xl border border-field-100/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                style={{ animationDelay: "1.2s" }}
              >
                <p className="font-mono text-lg font-semibold text-white">3</p>
                <p className="text-xs text-field-200">languages, one assistant</p>
              </div>
            </div>
          </div>

          <div className="relative h-72 md:h-[440px]">
            <div className="absolute inset-0 rounded-3xl">
              <FieldIllustration />
            </div>
          </div>
        </div>
      </div>

      <MarketTicker />

      {/* ── How it works ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-field-500">
            How it works
          </span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-field-900 md:text-4xl">
            From a photo in the field to an answer in your hand.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.12}>
              <div className="relative">
                <span className="font-display text-5xl font-semibold text-field-100">
                  {step.n}
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <div className="rounded-xl bg-field-900 p-2.5">
                    <step.icon className="h-5 w-5 text-turmeric-300" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-field-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────── */}
      <section className="bg-grain bg-paper-dim px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-field-500">
              Everything in one place
            </span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-field-900 md:text-4xl">
              Eight tools. One dashboard. Zero middlemen.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={(i % 4) * 0.08}>
                <div className="group h-full rounded-2xl border border-field-900/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-field-900/5">
                  <div className="w-fit rounded-xl bg-field-50 p-2.5 transition-colors group-hover:bg-turmeric-100">
                    <Icon className="h-5 w-5 text-field-600 transition-colors group-hover:text-turmeric-600" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-field-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-field-900 px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-turmeric-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-field-500/30 blur-3xl" />
            <h2 className="relative font-display text-3xl font-semibold text-white text-balance md:text-4xl">
              Your next harvest deserves better odds.
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-field-100">
              Join AgriConnect free — no credit card, no middleman, just a clearer view of your
              field and your market.
            </p>
            <Link
              href="/auth/signup"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-turmeric-400 px-7 py-3 text-sm font-semibold text-field-950 transition hover:bg-turmeric-300"
            >
              Create Your Account
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-field-900/10 px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-field-600" />
            <span className="font-display font-semibold text-field-900">AgriConnect</span>
          </div>
          <p>Smarter farming, made in the fields it serves.</p>
        </div>
      </footer>
    </div>
  );
}
