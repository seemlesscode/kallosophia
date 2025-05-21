# Kallosophia — Game Options Screen

This document describes the structure and content of the **Game Options Screen**, which is displayed before each game session begins.

---

## 📒 Content Inventory Table

| Element                 | Description                                   | Status        | Notes                                                 |
| ----------------------- | --------------------------------------------- | ------------- | ----------------------------------------------------- |
| Title                   | Screen heading (e.g., “Prepare Your Game”)    | 🔴 MVP        | Clearly indicates game setup                          |
| Quiz Length Selector    | Number of questions (e.g., 5, 10, 20)         | 🔴 MVP        | Can be implemented as a dropdown or segmented control |
| Difficulty Selector     | Easy (2 options) / Hard (4 options)           | 🔴 MVP        | Toggles how many choices per question                 |
| Room/Theme Preview      | Shows the name of the selected room           | 🔴 MVP        | Pulled from the context of selection                  |
| Start Button            | Begins the game                               | 🔴 MVP        | Primary CTA                                           |
| Cancel/Back Button      | Allows return to previous screen              | 🔴 MVP        | Bottom-left or inline link                            |
| Toggle: Timer           | Enable/disable question timer                 | 🟡 Beta       | Optional for users who want more time                 |
| Toggle: Info After Each | Show data card after each question            | 🔴 MVP        | Ties into “painting info” toggle                      |
| Toggle: Sound Effects   | Enable or disable UI/game sounds              | 🟡 Beta       | Can be saved in user prefs                            |
| Custom Quiz Parameters  | Advanced options (tags, artists, date ranges) | 🟢 Commercial | Enables filtered question sets                        |
| Save Preferences        | Remember last used setup                      | 🟢 Commercial | Requires persistent settings                          |

---

## 🧩 Zoning

### Mobile

```
╔══════════════════════════════════╗
║     🎮 Prepare Your Game         ║ ← Title
╠══════════════════════════════════╣
║ • Room: French Room              ║
║ • Questions: [ 5 ▼]              ║
║ • Difficulty: [ Easy | Hard ]    ║
╠══════════════════════════════════╣
║ ◉ Timer: On/Off                  ║ ← Optional toggles
║ ◉ Show Info After Each Question  ║
╠══════════════════════════════════╣
║     [ START ]   [ Cancel ]       ║ ← Main CTAs
╚══════════════════════════════════╝
```

### Desktop

```
╔════════════════════════════════════════════════════════════════╗
║ 🎮 Prepare Your Game                                            ║ ← Header
╠════════════════════════════════════════════════════════════════╣
║ ┌────────────────────────────┐   ┌──────────────────────────┐ ║
║ │ Room: French Room          │   │ ◉ Timer: On/Off          │ ║
║ │ Questions: [ 10 ▼ ]        │   │ ◉ Show Info After Each   │ ║
║ │ Difficulty: [ Easy | Hard ]│   │                          │ ║
║ └────────────────────────────┘   └──────────────────────────┘ ║
║                                                                ║
║              [   START GAME   ]   [ Cancel ]                   ║ ← Bottom row CTAs
╚════════════════════════════════════════════════════════════════╝
```

---

## Notes

- The game options screen is the user's **last stop before launching** a quiz.
- MVP implementation can be lightweight and expand over time.
- All user toggles can be cached in localStorage or user preferences later.
- Should maintain aesthetic consistency with museum tone: elegant, clear, and calm.
