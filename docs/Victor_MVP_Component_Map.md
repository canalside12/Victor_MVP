# Victor MVP — Component Map (Phase 1 UI Build)

This document maps UI components to modules and data models, based on your wireframes and build specification.

---

## 🏠 Unified Dashboard (`/dashboard`)
**Purpose:** Role-adaptive hub with KPIs, tasks, and Markus insights.

| Component | Function | Data Source |
|------------|-----------|-------------|
| `HeaderBar` | Logo, global search, profile dropdown | `users` |
| `SidebarNav` | Navigation links by role | Static config |
| `KPIWidget` | Displays key metrics (Active Projects, Portfolio Value, etc.) | Aggregated from `projects`, `properties`, `transactions` |
| `TimelineWidget` | Shows upcoming milestones, payments, and deadlines | `tasks`, `transactions` |
| `MarkusPanel` | Displays AI insights, alerts, and suggestions | `markus_logs` |
| `QuickActions` | Shortcuts: Add Property, Start Project, View Financials | Client-side navigation |

---

## 👤 Onboarding (`/onboarding`)
**Purpose:** Role selection & Markus introduction.

| Component | Function | Data Source |
|------------|-----------|-------------|
| `WelcomeScreen` | Displays greeting + “Get Started” | Static |
| `RoleCard` | Selects user type (Homeowner, Investor, etc.) | Static config |
| `MarkusIntro` | Animated assistant message + continue button | Static + future AI hook |
| `RoleContext` | Saves chosen role to user record | `users` |

---

## 🏗️ Project Workspace (`/workspace`)
**Purpose:** Task, milestone, and budget tracking.

| Component | Function | Data Source |
|------------|-----------|-------------|
| `ProjectCard` | Displays project summary and progress | `projects` |
| `MilestoneList` | Shows task completion and due dates | `tasks` |
| `BudgetTracker` | Displays expense breakdown | `budget_lines` |
| `FileUpload` | Upload contracts, photos, docs | `files` |

---

## 🏢 Property Hub (`/property-hub`)
**Purpose:** Manage all owned or managed properties.

| Component | Function | Data Source |
|------------|-----------|-------------|
| `PropertyCard` | Displays status, rent, project links | `properties` |
| `PortfolioSummary` | High-level occupancy & cash flow stats | `properties`, `transactions` |
| `QuickInsightsPanel` | Markus-driven recommendations | `markus_logs` |

---

## 💰 Financials (`/financials`)
**Purpose:** Income, expenses, reconciliation.

| Component | Function | Data Source |
|------------|-----------|-------------|
| `AccountList` | Displays linked bank accounts | `accounts` |
| `TransactionTable` | Ledger with categories and status | `transactions` |
| `ReportsPanel` | Monthly/Quarterly summaries | Derived metrics |
| `MarkusAlerts` | Flags anomalies or duplicates | `markus_logs` |

---

## 🤖 Markus Integration (AI Layer)
**Phase 1 Functionality**
- Context-aware query handling via `/api/markus/query`.
- Suggestions limited to summaries, reminders, and categorization.
- All actions require user confirmation.

**Phase 2 Preview**
- Predictive recommendations.
- Automated vendor scheduling.
- AI-generated financial forecasts.

---

## 🧱 Shared Components (Global)
- `Button` — Consistent CTA styling.
- `Card` — Base container for modules.
- `Avatar` — Profile image / initials display.
- `Modal` — Used for forms, confirmations.
- `Loader` — Minimal animated spinner.

---

### Notes
- Follow color tokens: `--fire-red` (#C8102E), `--lavender` (#7C83FD).
- Typography: Inter / Poppins, 14–18px base.
- Layout grid: 12-column responsive design.
- All modules must support both mobile and web (React Native parity later).

