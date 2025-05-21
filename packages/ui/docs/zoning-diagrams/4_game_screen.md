# Kallosophia — Game Screen Zoning (Desktop)

This document describes the layout and components of the **desktop version** of the Kallosophia game screen, along with a table of its UI elements and their implementation stage.

---

## 📒 Content Inventory Table

| Element                 | Description                                  | Status  |
| ----------------------- | -------------------------------------------- | ------- |
| Username & Avatar       | User identity on top left                    | 🔴 MVP  |
| Incognito/Public Toggle | Visibility mode indicator                    | 🔴 MVP  |
| Question Progress       | Example: “Q 3 of 10”                         | 🔴 MVP  |
| Timer                   | Countdown per question                       | 🟡 Beta |
| Artwork Display         | Centerpiece image — unmodified and full      | 🔴 MVP  |
| Question Text           | Main question above answers                  | 🔴 MVP  |
| Answer Options          | 2 options (easy mode), 4 options (hard mode) | 🔴 MVP  |
| XP or Score             | Total score or XP visible                    | 🔴 MVP  |
| Exit Button             | Return to home or quit quiz                  | 🔴 MVP  |

---

## 🧩 Game Screen Zoning

### Mobile

## 🧩 Game Screen Zoning — Mobile

```
╔══════════════════════════════════╗
║ 🧑 Username     🔕 Incognito      ║ ← Top bar
╠══════════════════════════════════╣
║ 🔄 Q 2 of 10         ⏱️ 00:07     ║ ← Progress + Timer
╠══════════════════════════════════╣
║                                  ║
║       🖼️ FULL ARTWORK DISPLAY     ║ ← Prominent artwork block
║                                  ║
║     ❓ What is the title of       ║
║        this painting?            ║ ← Question text
║                                  ║
║   [ 1. The Birth of Venus     ]  ║ ← Answer options
║   [ 2. Primavera               ]  ║
║   [ 3. Venus of Urbino        ]  ║ ← Only if in hard mode
║   [ 4. Venus and Adonis       ]  ║
║                                  ║
╠══════════════════════════════════╣
║ Score: 80                        ║
╚══════════════════════════════════╝
```

### Desktop

```
╔════════════════════════════════════════════════════════════════════════╗
║ 🧑 Username     ⬇ Incognito Mode     Q 3/10     ⏱️ 00:06     🎖️ XP: 1240 ║ ← Top Bar
╠════════════════════════════════════════════════════════════════════════╣
║ ┌────────────────────────────┐   ┌───────────────────────────────┐     ║
║ │                            │   │ ❓ QUESTION TEXT              │     ║
║ │     🖼️ FULL ARTWORK        │   │                               │     ║
║ │    (Tall or wide, fit)     │   │ [ 1. Option 1               ] │     ║
║ │                            │   │ [ 2. Option 2               ] │     ║
║ └────────────────────────────┘   │ [ 3. Option 3 (if hard)     ] │     ║
║                                  │ [ 4. Option 4 (if hard)     ] │     ║
║                                  │                               │     ║
║                                  │                               │     ║
║                                  └───────────────────────────────┘     ║
╠════════════════════════════════════════════════════════════════════════╣
║                             ↩️ Exit to Home                             ║ ← Bottom link (optional)
╚════════════════════════════════════════════════════════════════════════╝
(Background: Full painting, unmodified, filling vertical space where possible)
```

---

## Notes

- The layout adapts to the painting’s orientation and screen width.
- All CTAs and feedback components avoid overlapping artwork.
- Button layout is responsive: vertically stacked with good tap spacing.
