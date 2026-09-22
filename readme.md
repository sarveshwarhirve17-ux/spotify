# 🎵 Spotify Clone – Web Music Player

A responsive, browser-based music player inspired by Spotify's Web Player UI. Built from scratch using **HTML, CSS, and vanilla JavaScript**, this project lets users browse albums, view a dynamic song library, and control playback — all without any external frameworks or libraries.

---

## 🚀 Features

- **Play / Pause Control** – Toggle playback of the current track with a single click.
- **Next / Previous Track** – Seamlessly skip forward or backward through the song list.
- **Dynamic Song Library** – Songs are fetched from the server directory and rendered into the sidebar automatically (no hardcoding).
- **Click-to-Play from Library** – Click any song in the library list to play it instantly.
- **Album / Playlist Switching** – Open different albums/folders to load and play a new set of songs.
- **Live Seekbar & Timeline** – Real-time progress bar synced with the current playback position, with click-to-seek support.
- **Volume Control** – Adjustable volume slider for the audio output.
- **Responsive UI** – Fully responsive layout that adapts across desktop and mobile screen sizes, including a collapsible sidebar (hamburger menu) for smaller screens.
- **Spotify-Inspired Design** – Clean, modern, dark-themed interface closely resembling the official Spotify Web Player.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5**  | Page structure and semantic layout |
| **CSS3**   | Styling, responsive design, flexbox-based layout |
| **JavaScript (ES6+)** | DOM manipulation, audio control, dynamic rendering |

### Core JavaScript Concepts Used
- `fetch()` API for retrieving the song directory listing
- `addEventListener()` for handling all user interactions (play, pause, next, previous, seek, volume, album switch, sidebar toggle)
- `getElementsByTagName()` / `getElementById()` for DOM traversal and element selection
- `HTMLAudioElement` (`Audio()`) for playback control
- Template literals for dynamically generating song list items
- Array methods (`indexOf`, `findIndex`, `split`, `push`) for track management and navigation logic

---

## 📁 Project Structure

```
spotify-clone/
│
├── index.html          # Main HTML structure
├── style.css           # Core styling
├── utility.css          # Utility/helper classes
├── script.js            # Application logic (playback, navigation, UI events)
├── songs/                # Folder containing .mp3 files served by the backend
└── assets/               # SVG icons (play, pause, next, previous, volume, etc.)
```

---

## ▶️ How It Works

1. On page load, `getSongs()` fetches the list of available `.mp3` files from the server and populates the song library.
2. The first song is loaded (paused) by default.
3. Clicking **Play** toggles playback and swaps the play/pause icon accordingly.
4. Clicking **Next** or **Previous** locates the currently playing track within the song list and loads the adjacent track.
5. Clicking any song in the library list plays that specific track directly.
6. The seekbar updates in real time via the `timeupdate` event and supports click-to-seek.
7. Selecting an album card reloads the song list for that album/folder.

---

## 📱 Responsiveness

The layout is built to work smoothly across devices:
- **Desktop** – Full sidebar + playback panel view.
- **Mobile** – Collapsible sidebar accessible via a hamburger icon, with the playback panel optimized for smaller screens.

---

## ⚙️ Setup & Usage

1. Clone or download the project folder.
2. Place your `.mp3` files inside the `songs/` directory.
3. Serve the project using a local server (e.g., VS Code Live Server / Live Preview) — the app fetches songs via `http://127.0.0.1:3000/songs/`, so it must be run through a server, not opened directly as a file.
4. Open the served URL in your browser and start playing music.

---

## 🎓 Credits

This project was built as part of learning fullstack/web development, following the **"Code with Harry" Web Sigma course**, with custom debugging, fixes, and enhancements made independently.

---

## 👤 Author

**Sarveshwar**
B.Tech (Computer Science) | Aspiring Fullstack Developer
Based in Nashik, Maharashtra