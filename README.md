# AgriConnect 🌾

AI-powered smart agriculture and food supply chain platform that helps farmers increase
productivity and profits.

## Features

- **AI Crop Disease Detection** — upload a photo, get an instant diagnosis and treatment plan
- **Real-Time Weather Forecasts** — hyperlocal forecasts with farming advisories
- **Live Market Prices** — mandi price tracking across crops, markets, and states
- **Farmer-to-Buyer Marketplace** — direct sales, no middlemen
- **Transport & Logistics** — book and track produce transport
- **Expert Consultation** — connect with agronomists and agriculture experts
- **Government Scheme Recommendations** — personalized subsidy, loan, and insurance matches
- **Multilingual Voice Assistant** — English, Telugu (తెలుగు), and Hindi (हिन्दी)
- **Analytics Dashboard** — yield and revenue trends over time

## Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Backend/Data:** Firebase (Authentication, Firestore, Storage)
- **Charts:** Recharts
- **AI Services:** pluggable — connect crop disease detection, weather, and the voice
  assistant to your model/API of choice (see `src/app/api/*/route.ts`)

## Project Structure

```
src/
  app/
    (app)/              # Authenticated app shell (sidebar + navbar layout)
      dashboard/         # Overview dashboard
      crop-disease/       # AI crop disease detection
      weather/             # Weather forecast
      market-prices/        # Live mandi prices
      marketplace/           # Farmer-to-buyer listings
      logistics/               # Transport & logistics tracking
      consultation/              # Expert Q&A
      schemes/                    # Government scheme recommendations
      analytics/                   # Yield & revenue charts
      voice-assistant/              # Multilingual chat/voice assistant
    auth/
      login/                        # Firebase email/password sign-in
      signup/                        # Firebase sign-up + Firestore profile creation
    api/
      crop-disease/route.ts          # Image analysis endpoint (stub — wire to your model)
      weather/route.ts                # Weather provider endpoint (stub)
      market-prices/route.ts           # Market price provider endpoint (stub)
      chat/route.ts                     # AI assistant endpoint (stub)
    layout.tsx / page.tsx                # Root layout + public landing page
  components/
    layout/        # Sidebar, navbar, language switcher
    dashboard/       # Stat cards
    marketplace/       # Listing cards
  lib/
    firebase/        # Client + Admin SDK initialization
    utils.ts           # Formatting helpers (currency, dates, class merging)
  types/              # Shared TypeScript domain types
firestore.rules       # Firestore security rules
storage.rules          # Firebase Storage security rules
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Firebase

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication** (Email/Password, and optionally Phone for OTP login)
3. Enable **Firestore Database**
4. Enable **Storage**
5. Copy your web app config into `.env.local` (see `.env.example`)
6. Generate a service account key (Project Settings → Service Accounts) for the Admin SDK
   env vars, used in server-side routes/`src/lib/firebase/admin.ts`
7. Deploy security rules:
   ```bash
   firebase deploy --only firestore:rules,storage:rules
   ```

### 3. Configure environment variables

```bash
cp .env.example .env.local
# then fill in your Firebase and AI service credentials
```

### 4. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Connecting Real Data & AI Services

This scaffold ships with working UI and mock/placeholder data so every page renders out of
the box. To make it production-ready, wire up:

| Feature | File | What to do |
|---|---|---|
| Crop disease detection | `src/app/api/crop-disease/route.ts` | Call your vision model (e.g. a fine-tuned classifier or a multimodal LLM) with the uploaded image |
| Weather | `src/app/api/weather/route.ts` | Call a weather provider (OpenWeatherMap, IMD, etc.) using `WEATHER_API_KEY` |
| Market prices | `src/app/api/market-prices/route.ts` | Call Agmarknet / data.gov.in or a state mandi API |
| Voice assistant | `src/app/api/chat/route.ts` | Call an LLM (e.g. the Anthropic API) with a multilingual system prompt |
| Marketplace, logistics, consultation, schemes | respective `page.tsx` files | Replace the `getX()` mock functions with Firestore queries (`collection`, `query`, `where`) |
| Voice input | `src/app/(app)/voice-assistant/page.tsx` | Wire up the Web Speech API or a cloud speech-to-text service for `en-IN` / `te-IN` / `hi-IN` |

## Scaling Notes

- Firestore security rules (`firestore.rules`) enforce per-user data ownership — extend them
  as new collections are added.
- Firebase Storage rules (`storage.rules`) keep crop scan images private and listing images
  public.
- The `(app)` route group keeps the authenticated shell (sidebar/navbar) separate from the
  public landing page and auth flows — add middleware in `src/middleware.ts` to protect these
  routes once Firebase Auth session cookies are wired up.
- `src/types/index.ts` centralizes all domain models — keep Firestore documents in sync with
  these shapes as the schema evolves.

## License

Proprietary — all rights reserved (update as appropriate for your project).
