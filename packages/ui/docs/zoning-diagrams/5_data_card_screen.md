# Kallosophia — Data Card Component (Zoning & Structure)

This document describes the structure, behavior, and layout zoning of the **Data Card** component used in Kallosophia. It appears either as a post-question display (if the user has enabled "Give painting info") or inside the Study Room.

---

## 📒 Content Inventory Table

| Element           | Description                                 | Status        |
| ----------------- | ------------------------------------------- | ------------- |
| Artwork Display   | Unmodified painting, fits layout            | 🔴 MVP        |
| Title             | Name of the artwork                         | 🔴 MVP        |
| Artist            | Full name of the artist                     | 🔴 MVP        |
| Date              | Year or date range of creation              | 🔴 MVP        |
| Medium            | Technique/materials used                    | 🔴 MVP        |
| Location          | Where the painting is currently exhibited   | 🔴 MVP        |
| Dimensions        | Height × Width                              | 🔴 MVP        |
| Rights            | Public domain, private collection, etc.     | 🔴 MVP        |
| Optional Header   | “Painting Info” or similar label            | 🟡 Beta       |
| Responsive Layout | Vertical on mobile, side-by-side on desktop | 🔴 MVP        |
| Advanced Layout   | Data grouping, filtering, formatting        | 🟢 Commercial |

---

## 🎯 Purpose

- Present clear, educational information about the artwork shown in the quiz.
- Avoid any game-related UI elements (no scores, no answer feedback).
- Encourage learning and curiosity in both quiz and study contexts.

---

## 🧩 Zoning

### Mobile

```
╔══════════════════════════════════╗
║       🖼️ FULL ARTWORK DISPLAY     ║ ← Painting centered, top
╠══════════════════════════════════╣
║          🧾 Painting Info         ║ ← Title/header (optional)
╠══════════════════════════════════╣
║ • Title: Mona Lisa               ║
║ • Artist: Leonardo da Vinci      ║
║ • Date: 1503–1506                ║
║ • Medium: Oil on poplar panel    ║
║ • Location: Le Louvre, Paris     ║
║ • Dimensions: 77 × 53 cm         ║        ║
╚══════════════════════════════════╝
```

### Desktop

```
╔════════════════════════════════════════════════════════════════╗
║ 🖼️ FULL ARTWORK              │  🧾 Painting Info               ║
║ (Left column, tall & centered)│  • Title: Mona Lisa           ║
║                               │  • Artist: Leonardo da Vinci  ║
║                               │  • Date: 1503–1506            ║
║                               │  • Medium: Oil on poplar panel║
║                               │  • Location: Le Louvre, Paris ║
║                               │  • Dimensions: 77 × 53 cm     ║
║                               │  • Rights: Public domain      ║
╚════════════════════════════════════════════════════════════════╝
```

---

## Notes

- The component is **context-aware**: it appears only when enabled or in Study Room.
- Long-term enhancements may include visualizations, interactive timelines, and metadata tags.
- Styling should match the tone of the app: clean, neutral, museum-like.
