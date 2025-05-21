# Kallosophia Home Screen Planning

## 📒 Content Inventory Table

| Element                   | Description                       | Status        | Notes                        |
| ------------------------- | --------------------------------- | ------------- | ---------------------------- |
| App Title                 | "Kallosophia" in serif font       | 🔴 MVP        | Centered, elegant            |
| Background Artwork        | Full-screen painting with overlay | 🔴 MVP        | Default: Composition VIII    |
| Play Button               | CTA to enter game mode            | 🔴 MVP        | Full width, prominent        |
| Study Button              | CTA to access private study room  | 🔴 MVP        | Full width, slightly lighter |
| Mode Toggle               | Incognito / Public                | 🔴 MVP        | Top-right, toggle/pill style |
| Username & Avatar         | User identity                     | 🔴 MVP        | Top-left, opens dropdown     |
| XP Display                | Shows current experience points   | 🔴 MVP        | Bottom or gamification bar   |
| Badge Count               | Number of earned badges           | 🔴 MVP        | With XP display              |
| Avatar Dropdown Menu      | Settings & account management     | 🔴 MVP        | Theme, Language, Logout etc. |
| Daily Challenge CTA       | Shortcut to daily quiz            | 🟡 Beta       | Optional streak reward       |
| Current Streak            | Ongoing streak + best streak      | 🟡 Beta       | Motivational stat block      |
| Store Button              | Opens store for power-ups/premium | 🟢 Commercial | Introduces monetization      |
| Premium Membership Teaser | Non-intrusive upsell              | 🟢 Commercial | Light CTA, optional info     |
| App Info / Feedback       | Version, contact, feedback option | 🟢 Commercial | Inside avatar menu           |

---

## 🧩 Zoning Diagram — MVP

### Mobile

```
╔══════════════════════════════════╗
║ 🧑 Username         ⬇ Incognito ⬇║
╠══════════════════════════════════╣
║                                  ║
║         KALLOSOPHIA              ║
║                                  ║
║         [ PLAY ]                 ║
║         [ STUDY ]                ║
╠══════════════════════════════════╣
║    ⭐ XP: 1240      🎖️ 5 Badges   ║
╚══════════════════════════════════╝
```

### Desktop

```
╔════════════════════════════════════════════════════════════════════════╗
║ 🧑 Username       ⬇ Incognito Mode                                     ║ ← Top Bar
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║                            KALLOSOPHIA                                 ║ ← App Title
║                                                                        ║
║                        [     PLAY     ]                                ║ ← Main CTA
║                        [    STUDY     ]                                ║
║                                                                        ║
║                ⭐ XP: 1240      🎖️ Badges: 5                           ║
╚════════════════════════════════════════════════════════════════════════╝
(Background: Default fullscreen artwork)
```

---

## 🧩 Zoning Diagram — Beta

### Mobile

```
╔══════════════════════════════════╗
║ 🧑 Username         ⬇ Incognito ⬇║
╠══════════════════════════════════╣
║         KALLOSOPHIA              ║
║         [ PLAY ]                 ║
║         [ STUDY ]                ║
╠══════════════════════════════════╣
║ 💥 Daily Challenge               ║
║ 🔥 Streak: 3 Days    Best: 9     ║
╠══════════════════════════════════╣
║ ⭐ XP: 1240      🎖️ 5 Badges      ║
╚══════════════════════════════════╝
```

### Desktop

```
╔════════════════════════════════════════════════════════════════════════╗
║ 🧑 Username       ⬇ Incognito Mode                                     ║ ← Top Bar
╠════════════════════════════════════════════════════════════════════════╣
║                            KALLOSOPHIA                                 ║
║                        [     PLAY     ]                                ║
║                        [    STUDY     ]                                ║
╠════════════════════════════════════════════════════════════════════════╣
║ 💥 Daily Challenge                                                     ║
║ 🔥 Streak: 3 Days     🏆 Best: 9                                        ║
╠════════════════════════════════════════════════════════════════════════╣
║ ⭐ XP: 1240      🎖️ Badges: 5                                          ║
╚════════════════════════════════════════════════════════════════════════╝
(Background: Switches based on theme — light/dark pair)
```

---

## 🧩 Zoning Diagram — Commercial Release

### Mobile

```
╔══════════════════════════════════╗
║ 🧑 Username         ⬇ Incognito ⬇║
║   ▼ Avatar menu:                ║
║     - Theme Toggle              ║
║     - Language                  ║
║     - App Info / Feedback       ║
║     - Logout / Reset            ║
╠══════════════════════════════════╣
║         KALLOSOPHIA              ║
║         [ PLAY ]                 ║
║         [ STUDY ]                ║
╠══════════════════════════════════╣
║ 💥 Daily Challenge               ║
║ 🔥 Streak: 3 Days    Best: 9     ║
╠══════════════════════════════════╣
║ 🛒 Store     ⭐ XP: 1240    🎖️ 5  ║
╠══════════════════════════════════╣
║ 💎 Premium Benefits              ║
╚══════════════════════════════════╝
```

### Desktop

```
╔════════════════════════════════════════════════════════════════════════╗
║ 🧑 Username     ⬇ Incognito Mode     🛒 Store     ⭐ XP     🎖️ Badges    ║ ← Top Bar
║ ▼ Avatar Menu:                                                         ║
║   - Theme Toggle                                                       ║
║   - Language                                                           ║
║   - App Info / Feedback                                                ║
║   - Logout / Reset / Delete                                            ║
╠════════════════════════════════════════════════════════════════════════╣
║                            KALLOSOPHIA                                 ║
║               [     PLAY     ]     [    STUDY    ]                    ║ ← Dual CTAs
╠════════════════════════════════════════════════════════════════════════╣
║ 💥 Daily Challenge                                                     ║
║ 🔥 Streak: 3 Days     🏆 Best: 9                                        ║
╠════════════════════════════════════════════════════════════════════════╣
║ 💎 Premium Benefits — “Unlock exclusive rooms & features”             ║
╚════════════════════════════════════════════════════════════════════════╝
(Background: User-selected from store or collection)
```
