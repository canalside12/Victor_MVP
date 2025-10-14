
# Victor — MVP Monorepo Scaffold (Phase 1)

This scaffold contains a minimal, well-structured starter repository for the Victor MVP.
It includes a `frontend` (Next.js + TypeScript) and `backend` (Node + Express) with a small `shared` folder
for shared types and utilities.

⚠️ IMPORTANT: this scaffold contains only starter source files. You must run `npm install` in each package
and provide environment variables (see `.env.example`) before running any service locally.

## Structure
- frontend/      — Next.js app (TypeScript) for UI
- backend/       — Express server for API endpoints & Markus orchestration endpoints
- shared/        — Shared TypeScript types & interfaces
- .env.example   — example environment variables

## How to use (high-level)
1. Open WSL/Ubuntu on your development machine.
2. Copy this folder to your development directory.
3. In `/frontend` run: `npm install` then `npm run dev` to start the Next.js dev server.
4. In `/backend` run: `npm install` then `npm run dev` to start the API server.
5. Update `.env` values based on `.env.example`. Provide Supabase and OpenAI keys when available.

If you'd like, I can also generate migration SQL files for Supabase and a set of seed JSON data next.
