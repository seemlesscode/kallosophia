# Kallosophia — Floor Map Screen (Zoning & Structure)

This document defines the structure and layout of the **Floor Map** screen for both mobile and desktop versions, along with considerations for integrating gameplay elements.

---

## 📒 Content Inventory Table

| Element                 | Description                                     | Status     |
| ----------------------- | ----------------------------------------------- | ---------- |
| Title                   | Title of the floor or wing                      | MVP        |
| Floor Map Image         | Static visual map with spatial layout           | MVP        |
| Room List               | Clickable textual list of rooms with names/IDs  | MVP        |
| Locked Room Icon        | Visual indicator for rooms not yet accessible   | MVP        |
| Selected Room Highlight | UI feedback for currently selected room         | MVP        |
| Hover/Active Info       | Shows room title or progress on hover (desktop) | Beta       |
| Dynamic Unlocks         | Unlock logic tied to progress                   | Beta       |
| Mini Stats per Room     | XP/Progress shown per room                      | Commercial |

---

## 🧭 Purpose

- Serves as the user's navigation hub through themed rooms (e.g. French, Italian).
- Maintains the atmosphere of a physical museum.
- Offers a lightweight UI with minimal distractions.

---

## 🧩 Zoning

### Mobile

```
╔══════════════════════════════════╗
║     🏛️ Masterpiece Pavilion       ║ ← Title
╠══════════════════════════════════╣
║     🖼️ Floor Map Image            ║ ← Static or dynamic map
╠══════════════════════════════════╣
║   • 101: French                  ║
║   • 102: Italian                 ║ ← Clickable room list
║   • 103: Spanish                 ║
║   • 104: Flemish                 ║
║   • 105: ? (Locked)              ║
╚══════════════════════════════════╝
```

---

## 🧩 Zoning — Desktop

```
╔════════════════════════════════════════════════════════════════╗
║ 🏛️ Masterpiece Pavilion                                        ║ ← Title
╠════════════════════════════════════════════════════════════════╣
║ ┌────────────────────────────┐   ┌──────────────────────────┐ ║
║ │ 🖼️ Floor Map Image         │   │ • 101: French            │ ║
║ │                            │   │ • 102: Italian           │ ║
║ │                            │   │ • 103: Spanish           │ ║
║ │                            │   │ • 104: Flemish           │ ║
║ │                            │   │ • 105: ? (Locked)        │ ║
║ └────────────────────────────┘   └──────────────────────────┘ ║
╚════════════════════════════════════════════════════════════════╝
```

---

## 🎮 Gameplay Elements — Integration Considerations

- **MVP**: Game logic is only triggered after clicking a room.
- **Beta**: Each room may show progress or stars next to it.
- **Commercial**:
  - Hovering over a room may show best score or unlock criteria.
  - Room list may include filters, sorting, or progress badges.
  - Map could become partially interactive.

---

## Notes

- The map image should preserve spatial orientation to help users mentally map their progression.
- Maintain legibility and clean spacing, especially when paired with game icons or stats.
- The floor map is meant to feel **navigational, not gamified**, with subtle game cues layered on top.
