# Kallosophia — Game Result Screen

This document outlines the structure and content of the **Game Result Screen**, which is shown at the end of each quiz session.

---

## 📒 Content Inventory Table

| Element               | Description                                 | Status        | Notes                            |
| --------------------- | ------------------------------------------- | ------------- | -------------------------------- |
| Title                 | “Your Results” or similar summary header    | 🔴 MVP        | Displayed prominently            |
| Score Summary         | Final score out of total                    | 🔴 MVP        | e.g., "7/10 correct"             |
| XP Earned             | XP gained from this session                 | 🔴 MVP        | Tied to user's progression       |
| Streak Impact         | Streak count or bonus display               | 🟡 Beta       | Encourages consistent play       |
| Badge Unlock Display  | Shows if a badge has been earned            | 🟡 Beta       | Temporary pop-up or persistent   |
| Replay Button         | Retry the same room/topic                   | 🔴 MVP        | CTA button                       |
| Next Quiz Button      | Go to next available room                   | 🔴 MVP        | Conditional on availability      |
| Review Answers Button | Let user review the questions they answered | 🔴 MVP        | Connects to recap or review mode |
| Share Score Button    | Shareable result link/image                 | 🟢 Commercial | Optional social feature          |
| Exit to Home          | Return to main menu or floor map            | 🔴 MVP        | Always available                 |

---

## 🧩 Zoning

### Mobile

```
╔══════════════════════════════════╗
║     🏁 Your Results              ║ ← Title
╠══════════════════════════════════╣
║ • 🕊️ Score: 7/10                 ║
║ • ⭐ XP Earned: +120             ║
║                                  ║
║ • 🔥 Streak Bonus: +20 XP        ║ ← Optional
║ • 🎖️ New Badge: “Louvre Explorer”║ ← Optional
╠══════════════════════════════════╣
║ [ Review Answers ]               ║
║ [ Replay Quiz ]   [ Next Quiz ]  ║
║ [ Exit to Home ]                 ║
╚══════════════════════════════════╝
```

### Desktop

```
╔════════════════════════════════════════════════════════════════╗
║ 🏁 Your Results                                                ║ ← Title
╠════════════════════════════════════════════════════════════════╣
║                     🕊️ Final Score: 9/10                       ║
║                     ⭐ XP Earned: +150                         ║
║                     🔥 Streak: 4 (Best: 9)                     ║
║                     🎖️ Badge Unlocked: "Renaissance"           ║
╠════════════════════════════════════════════════════════════════╣
║                     [ Replay Quiz ]  [ Next Quiz ]  [ Exit ]   ║ ← Action row
╚════════════════════════════════════════════════════════════════╝
```

---

## Notes

- Result screens are an opportunity to **reward, inform, and encourage**.
- Should maintain celebratory tone but remain museum-grade in elegance.
- Score breakdowns and XP should be animated or staged (if possible).
- On replay, reuse previously selected options for fast restart.
