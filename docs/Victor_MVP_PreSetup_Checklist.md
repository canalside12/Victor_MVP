# Victor MVP — Pre-Setup Checklist
*(For existing laptop environment — preparation before active builds)*

## ✅ Folder & File Structure
- [x] /frontend (Next.js + TypeScript)
- [x] /backend (Express + Supabase SDK)
- [x] /shared (TypeScript models)
- [x] /.env.example (template ready)
- [x] /run_all.sh (startup script)
- [ ] /docs (in progress)

## ⚙️ Environment Files
- [x] Copied `.env.example` → `.env`
- [x] Inserted placeholder keys:

SUPABASE_URL=https://example.supabase.co
SUPABASE_ANON_KEY=dummykey
OPENAI_API_KEY=placeholder
STRIPE_SECRET_KEY=placeholder

- [ ] Replace placeholders with real keys after Supabase + OpenAI setup.

## 🧩 Code & Structure Prep
- [x] Frontend pages scaffolded:
- `/app/page.tsx`
- `/app/onboarding/page.tsx`
- `/app/dashboard/page.tsx`
- [x] Backend initialized (`server.js`, Express + nodemon)
- [x] Shared models created
- [ ] Add `/backend/db/schema.sql` (Supabase tables)
- [ ] Add `/backend/db/seed.sql` (sample data)

## 🧱 Data Modeling
- [x] Draft `shared/models.ts` interfaces.
- [ ] Write SQL schema from those interfaces.
- [ ] Confirm consistency with Victor_MVP_Build_Specification.pdf.

## 🧠 Markus AI Prep
- [ ] Define sample prompts & expected responses in `/docs/markus_prompt_examples.md`.
- [ ] Write pseudocode for `/api/markus/query` before real OpenAI integration.

## 🎨 UI Development
- [x] Wireframes uploaded.
- [ ] Create component stubs:
- Sidebar
- KPIWidget
- MarkusPanel
- Header
- QuickActions
- [ ] Implement placeholder components in `/frontend/app/dashboard`.

## 🗂️ Version Control
- [ ] Initialize Git repo (`git init`).
- [ ] Add `.gitignore` and confirm coverage.
- [ ] Create branches: `main`, `dev`, `phase_2_preview`.
- [ ] Backup ZIP to cloud or USB.

## 🚀 Ready for New Laptop
Once the above boxes are all checked:
1. Install WSL (Ubuntu) + Node 20 + Git + VS Code.
2. Run `npm install` in both frontend and backend.
3. Run `bash run_all.sh`.
4. Connect Supabase + OpenAI.
5. Begin Sprint 1 (Onboarding + Unified Dashboard).