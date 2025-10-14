# Victor MVP — UI & Component Style Guide v2

## 🧭 Design Philosophy
Victor represents the intersection of clarity, creativity, and control.  
Its visual system draws inspiration from **nature’s order** — structured yet alive, engineered yet effortless.  
Every design element should convey **trust**, **intelligence**, and **empathy**.

> “Victor is not about construction. It’s about creation — guided by clarity.”

---

## 🎨 Color Palette — Fire Red + Lavender System

| Color | Hex | Usage |
|-------|-----|--------|
| **Victor Red** | `#E11D48` | Primary accent, call-to-action buttons, brand highlights |
| **Lavender Mist** | `#C4B5FD` | Secondary accent, highlights, hover states |
| **Slate Gray** | `#F3F4F6` | Background base color |
| **Graphite Text** | `#1F2937` | Headings and strong text |
| **Cool Gray** | `#6B7280` | Secondary text and descriptions |
| **Success Green** | `#16A34A` | Positive indicators, confirmations |
| **Error Red** | `#F87171` | Warnings, alerts, or validation messages |

### Tailwind Config Example
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'victor-red': '#E11D48',
        'lavender': '#C4B5FD',
        'slate-gray': '#F3F4F6',
        'graphite': '#1F2937',
        'cool-gray': '#6B7280',
        'success-green': '#16A34A',
        'error-red': '#F87171',
      },
    },
  },
};
```

---

## 🔤 Typography System — Professional with Personality

Victor’s typography balances modern structure with warmth and wit.  
Headlines should invite attention; body text should remain calm and legible.

| Role | Font | Style | Example |
|------|------|--------|---------|
| **Brand Title** | *Poppins*, Bold | `text-3xl text-victor-red` | **Victor** |
| **Section Heading (H2)** | *Inter*, Semibold | `text-xl text-gray-900` | Current Projects |
| **Subheading (H3)** | *Inter*, Medium | `text-lg text-gray-700` | Project Insights |
| **Body Text** | *Inter*, Regular | `text-base text-gray-700` | Harbor renovation is 82% complete. |
| **Helper / Markus Text** | *Inter*, Light Italic | `text-sm text-gray-500 italic` | “If only contractors ran as efficiently as my queries.” |

---

## 🧩 Core Component Standards

### Buttons
| Type | Style | Example |
|------|--------|----------|
| **Primary** | `bg-victor-red text-white hover:bg-[#C8103E]` | Fire-red call-to-action |
| **Secondary** | `bg-lavender text-gray-800 hover:bg-[#A78BFA]` | Subtle hover accent |

### Cards
- White background, soft shadow, rounded corners.  
- Standard padding: `p-4` to `p-6`.  
- Border: `border border-gray-200`.

### Inputs
- Rounded border, subtle focus ring.  
- `border border-gray-300 focus:ring-2 focus:ring-lavender`.

### Shadows & Corners
- Default: `shadow-sm`  
- Hover: `hover:shadow-md`  
- Corner radius: `rounded-xl`

---

## 📏 Spacing & Layout

- Page padding: `p-6`  
- Component gap: `gap-4`  
- Grid patterns: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`  
- Layout balance: whitespace > density

---

## 📱 Responsiveness
- Sidebar collapses into top nav on small screens.  
- KPI grid adapts via Tailwind breakpoints.  
- MarkusPanel stacks vertically on mobile with full-width input.  

---

## 🤖 Markus Persona & Voice — “The Warm Advisor”

> “The cleverest person in the room who still holds the door open for you.”

### Tone
- Warm, articulate, confident.  
- Witty without arrogance.  
- Precise but approachable.

### Behavior
- Always greet the user by name or title.  
- Provide clear and proactive recommendations.  
- Use light humor sparingly (max 1 emoji per message).  
- Acknowledge user emotions before offering logic.

### Example Voice
> “Good afternoon, Ms. Rivera. I’ve recalculated your project ROI — and I must say, even I’m impressed.”

> “If I had hands, I’d applaud your progress. Shall we review next week’s budget forecast?”

---

## 🎨 Identity Visuals
| Visual | Description | File Path |
|--------|--------------|------------|
| **Victor V1** | Brand identity inspired by nature’s structure and creation. | `assets/visuals/Victor_V1_Identity_Concept.png` |
| **Markus V1** | Semi-realistic portrait — witty, intelligent butler energy. | `assets/visuals/Markus_V1_Concept.png` |

---

## 🧾 Credits
Design System created for **Victor Platform MVP (2025)**  
Framework: Next.js + Tailwind CSS + React  
Developed collaboratively by **Joseph Thon** & **ChatGPT (GPT-5)**

---

> “Precision in form. Humanity in function. That’s Victor.”
