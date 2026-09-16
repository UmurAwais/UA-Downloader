# UA Save

A modern, high-speed media downloader application built with **React**, **Vite**, **TailwindCSS**, **Node.js/Express**, and powered by **yt-dlp** and **FFmpeg**.

![UA Save](src/assets/logo.jpg)

## Features

- **Multi-Platform Support**: Download videos and audio from YouTube, Facebook, Instagram, TikTok, and more.
- **Real-Time Progress Streaming**: Live download metrics showing exact bytes downloaded, speed (MB/s), ETA, and FFmpeg multiplexing status via Server-Sent Events (SSE).
- **Format & Quality Selection**:
  - Video in MP4 format (4K, 2K, 1080p Full HD, 720p HD, 480p, 360p)
  - Audio extraction in high-bitrate MP3 format (320kbps / 128kbps)
- **Automatic Direct Browser Download**: Delivers binary blobs straight to your browser's default Downloads folder without intermediate popup blockers.
- **Google Material Design 3 UI**: Clean, responsive, and minimalist light-theme interface.
- **Local Download History**: Automatically tracks past downloads for easy one-click access.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) installed and added to system PATH
- [FFmpeg](https://ffmpeg.org/) installed and added to system PATH

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/UmurAwais/UA-Downloader.git
cd UA-Downloader
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Backend API Server
```bash
node server.js
```
The server runs on `http://localhost:5000`.

### 4. Run the Frontend Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express, Axios, Server-Sent Events (SSE)
- **Engines**: `yt-dlp`, `ffmpeg`

---

## License

MIT License. Designed for personal and educational use.
