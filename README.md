# Tic Tac Toe

A simple two-player Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.

## Features

- Classic 3x3 Tic Tac Toe gameplay for two players
- Turn-based play (alternates between X and O)
- Automatic win detection across all 8 winning patterns (rows, columns, diagonals)
- Winner announcement overlay
- One-click Reset to start a new round
- Clean, minimal UI with a locked grid layout (CSS Grid) that stays aligned at any screen size

## Tech Stack

- **HTML** — game structure and layout
- **CSS** — styling and grid layout
- **JavaScript** — game logic (turn handling, win detection, reset)

## Project Structure

```
Tic-Tac-Toe/
├── index.html      # Game markup
├── style.css       # Styling and layout
├── script.js        # Game logic
└── README.md        # Project documentation
```

## How to Run

1. Clone or download this repository.
2. Open `index.html` directly in any modern web browser (no server or build step required).
3. Click any cell to place your mark. Players alternate turns automatically.
4. Click **Reset** at any time to clear the board and start over.

## How It Works

- Each cell is a button; clicking it fills in the current player's mark (`X` or `O`) and disables further edits to that cell.
- After every move, the game checks all 8 possible winning patterns to see if the current board state matches a win.
- If a win is found, the winner is displayed in an overlay and the rest of the board is disabled.
- The Reset button clears all marks and re-enables the board for a new game.


## Author

**Anas Dagga**
