# MockView 🎯

**AI-Powered Mock Interview Platform**

MockView helps job seekers practice for real interviews with AI-generated, role-specific questions and instant feedback. Paste in a job description, get tailored questions, record your answers, and receive detailed AI analysis — all completely free.

---

## 📋 Table of Contents

- [Overview](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#overview)
- [Current Status](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#current-status)
- [Tech Stack](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#tech-stack)
- [Project Structure](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#project-structure)
- [Database Schema](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#database-schema)
- [Getting Started](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#getting-started)
- [Environment Variables](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#environment-variables)
- [Available Scripts](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#available-scripts)
- [Roadmap](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#roadmap)

---

## Overview

**The Problem:** Fresh graduates and job seekers struggle with interview preparation because they lack access to realistic practice opportunities. Career services are overbooked, friends aren't effective interviewers, and self-recording provides no actionable feedback.

**The Solution:** MockView provides:

- AI-generated interview questions tailored to specific job postings
- Audio or text-based answer recording
- Instant AI feedback analyzing answer quality, relevance, and communication skills
- Progress tracking across multiple practice sessions
- Detailed performance analytics and improvement suggestions

**Target Users:** Recent graduates, career changers, and professionals preparing for job interviews who want realistic, structured practice with actionable feedback.

---

## Current Status

> **What's done:** Landing page, authentication pages (login + magic link / OAuth), and the full NextAuth setup with Prisma schema.

> **In progress:** Post-login experience — onboarding flow and dashboard are next.

### Completed (`app/(public)`)

- **Landing page** — full marketing page built with shadcn/ui and React Bits animations
- **Login page** — supports Magic Link (email), Google OAuth, and GitHub OAuth
- **Email verification page** — shown after magic link is sent
- **NextAuth configuration** — JWT sessions, three providers wired up, Prisma adapter

### In Progress (`app/(protected)`)

- Onboarding flow (next up)
- Dashboard
- Interview session creation and question flow
- Answer recording (audio + text)
- AI feedback display
- Session history and analytics
- User settings

---

## Tech Stack

### Frontend

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI primitives
- **Animations:** React Bits
- **Icons:** Lucide React

### Backend

- **Runtime:** Next.js API Routes (serverless)
- **ORM:** Prisma
- **Database:** PostgreSQL (Supabase)
- **Authentication:** NextAuth.js (JWT + Email Magic Link + OAuth)

### Planned Integrations _(not yet implemented)_

- **AI:** Google Gemini API — question generation and answer analysis
- **Storage:** Cloudflare R2 or Supabase Storage — audio file uploads
- **Email:** Resend — transactional emails beyond magic links

---

## Project Structure

```
mockview/
├── app/
│   ├── (protected)/              # Auth-guarded routes (in progress)
│   │   ├── layout.tsx            # Protected layout with session check
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── (public)/                 # Public routes (complete)
│   │   ├── page.tsx              # Landing page
│   │   └── login/
│   │       └── page.tsx          # Login page (magic link + OAuth)
│   │           └── verification/
│   │               └── page.tsx  # "Check your email" page
│   ├── api/
│   │   └── auth/
│   │       ├── errors/
│   │       │   └── page.tsx      # NextAuth error page
│   │       └── [...nextauth]/
│   │           └── route.ts      # NextAuth handler
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── providers.tsx
│
├── components/
│   ├── landing/                  # Landing page sections
│   │   ├── CTASection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── FooterSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   └── ProblemSection.tsx
│   ├── AnimatedContent.tsx       # React Bits / custom animation
│
├── constants/
│   ├── CustomMail.tsx            # Email template
│   ├── delete.html
│   └── SignUpRequirements.tsx
│
├── generated/
│   └── prisma/                   # Auto-generated Prisma client
│
├── hooks/
│   └── use-mobile.ts
│
├── lib/
│   ├── prisma.ts                 # Prisma client singleton
│   └── utils.ts
│
├── prisma/
│   └── schema.prisma
│
├── .env                          # Local environment variables (not committed)
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Database Schema

The current schema is minimal — focused on supporting NextAuth's required tables. It might expand as interview session features are built out.

```prisma
model User {
  id              String    @id @default(cuid())
  email           String    @unique
  name            String?
  emailVerified   DateTime?
  image           String?
  profileComplete Boolean   @default(false)
  createdAt       DateTime  @default(now())
  accounts        Account[]
  sessions        Session[]
}

model Session {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  expires   DateTime
  createdAt DateTime @default(now())
  responses Response[]
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

model Response {
  id        String   @id @default(cuid())
  sessionId String
  session   Session  @relation(fields: [sessionId], references: [id])
  question  String
  answer    String
  feedback  String?
  audioUrl  String?
  createdAt DateTime @default(now())
}
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Git
- A PostgreSQL database (Supabase free tier works great)
- SMTP credentials for sending magic link emails (Gmail, Mailgun, Resend, etc.)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mockview.git
cd mockview
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

See the [Environment Variables](https://claude.ai/chat/87bfa531-f296-446c-838b-8fdf8a7040e9#environment-variables) section below for details on each value.

### 4. Set Up the Database

```bash
# Generate the Prisma client
npx prisma generate

# Push the schema to your database (creates tables)
npx prisma db push
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) in your browser.

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# ─── Database ────────────────────────────────────────────────────────────────
# Supabase → Settings → Database → Connection Pooling URL
DATABASE_URL="postgresql://user:password@host:5432/dbname?pgbouncer=true"

# Supabase → Settings → Database → Direct Connection URL (used by Prisma migrate)
DIRECT_URL="postgresql://user:password@host:5432/dbname"

# ─── NextAuth ────────────────────────────────────────────────────────────────
NEXTAUTH_URL="http://localhost:3000"

# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET="your-secret-here"

# ─── Google OAuth ────────────────────────────────────────────────────────────
# console.cloud.google.com → Credentials → OAuth 2.0 Client IDs
# Authorized redirect URI: http://localhost:3000/api/auth/callback/google
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# ─── GitHub OAuth ────────────────────────────────────────────────────────────
# github.com → Settings → Developer settings → OAuth Apps
# Callback URL: http://localhost:3000/api/auth/callback/github
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# ─── Email (Magic Link) ──────────────────────────────────────────────────────
# SMTP server credentials for sending magic link emails
EMAIL_SERVER_HOST="smtp.example.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-smtp-username"
EMAIL_SERVER_PASS="your-smtp-password"
EMAIL_FROM="noreply@yourdomain.com"
```

### Getting Your Credentials

**Supabase (Database)**

1. Go to [supabase.com](https://supabase.com/) → Create a new project
2. Navigate to **Settings → Database**
3. Copy the **Connection Pooling** string into `DATABASE_URL`
4. Copy the **Direct Connection** string into `DIRECT_URL`

**Google OAuth**

1. Go to [console.cloud.google.com](https://console.cloud.google.com/)
2. Create a project → Enable the **Google+ API**
3. Go to **Credentials → Create Credentials → OAuth 2.0 Client ID**
4. Set application type to **Web application**
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret

**GitHub OAuth**

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Set the callback URL to: `http://localhost:3000/api/auth/callback/github`
3. Copy the Client ID and generate a Client Secret

**Email / SMTP**

- For local development you can use [Mailtrap](https://mailtrap.io/) or [Resend](https://resend.com/)
- For production, use any SMTP provider (Gmail with App Password, Resend, Postmark, etc.)
- With Resend's SMTP bridge: host is `smtp.resend.com`, port is `465`, user is `resend`, and pass is your API key

---

## Available Scripts

```bash
npm run dev      # Start the development server on http://localhost:3000
npm run build    # Build the app for production
npm run start    # Run the production build locally
npm run lint     # Run ESLint across the project
```

**Useful Prisma commands:**

```bash
npx prisma generate    # Regenerate the Prisma client after schema changes
npx prisma db push     # Push schema changes to the database (no migration file)
npx prisma studio      # Open Prisma Studio to inspect your database in a browser
npx prisma migrate dev # Create a migration file and apply it (for production-ready migrations)
```

---

## Roadmap

### Phase 1 — Auth & Core Setup ✅

- [x] Landing page
- [x] Login page with Magic Link, Google, and GitHub OAuth
- [x] Email verification page
- [x] NextAuth configuration
- [x] Prisma schema and database setup

### Phase 2 — Onboarding & Dashboard 🚧

- [ ] Onboarding flow (profile setup after first login)
- [ ] Dashboard home with session overview
- [ ] Protected route middleware

### Phase 3 — Interview Session Flow

- [ ] Job description input form
- [ ] AI-powered question generation (Gemini API)
- [ ] Question display and navigation UI
- [ ] Text-based answer recording
- [ ] Audio-based answer recording (MediaRecorder API)

### Phase 4 — AI Feedback

- [ ] Answer analysis via Gemini API
- [ ] Feedback display (scores, missed points, suggestions)
- [ ] Session summary and overall score

### Phase 5 — Analytics & History

- [ ] Session history list
- [ ] Performance analytics over time
- [ ] Skill breakdown by question type

### Phase 6 — Polish

- [ ] User settings page (profile, preferences)
- [ ] Downloadable session reports (PDF)
- [ ] Mobile optimization and touch-friendly recording UI
- [ ] Email notifications (session summaries, weekly digests)

---

## Common Issues

**Prisma client not found after pulling changes**

```bash
npx prisma generate
```

**Database connection fails**

- Double-check that `DATABASE_URL` uses the Connection Pooling URL from Supabase
- Make sure your Supabase project is active (free projects pause after inactivity)
- Use `DIRECT_URL` for `npx prisma migrate dev` commands

**Magic link email not arriving**

- Verify your SMTP credentials are correct
- Check spam/junk folders during development
- Use Mailtrap for local testing to catch emails without actually sending them

**NextAuth session not persisting**

- Ensure `NEXTAUTH_SECRET` is set and consistent
- Make sure `NEXTAUTH_URL` exactly matches the URL you're accessing the app from
- Clear browser cookies and try signing in again

**Google/GitHub OAuth redirect error**

- Confirm the callback URLs in your OAuth app settings match exactly:
    - Google: `http://localhost:3000/api/auth/callback/google`
    - GitHub: `http://localhost:3000/api/auth/callback/github`
- For production, add your production domain as an additional authorized redirect URI

---

## License

MIT License — free to use, fork, and build on.

---

## Author

**Saathvik N Sharma**

MCA Graduate

[GitHub](https://github.com/SaathvikNS) · [LinkedIn](https://www.linkedin.com/in/saathvikn-sharma-a84685203/)

---

_Built with ❤️ as a portfolio project demonstrating full-stack TypeScript development with Next.js 14, NextAuth, Prisma, and AI integration._
