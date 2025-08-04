# Video Streaming App

This project is a proof-of-concept video streaming application using Node.js (Express), React, and Video.js. It allows users to upload video files, which are then converted to HLS format for adaptive streaming.

## Features

- Upload video files via a REST API
- Convert uploaded videos to HLS format using FFmpeg
- Serve HLS playlists and segments
- Frontend video player built with React and Video.js
- Live video playback from HLS sources

## Project Structure

```
.
├── index.js                # Express backend server
├── uploads/                # Uploaded videos and HLS output
├── package.json            # Backend dependencies
└── frontend/
    ├── package.json        # Frontend dependencies
    ├── vite.config.js      # Vite config for React
    ├── src/
    │   ├── App.jsx         # Main React app
    │   ├── video.jsx       # Video.js React component
    │   ├── main.jsx        # React entry point
    │   └── ...             # Styles and assets
    └── index.html          # Frontend HTML
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- FFmpeg installed and available in your system PATH

### Backend Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the backend server:

   ```sh
   node index.js
   ```

   The server runs on `http://localhost:8000`.

### Frontend Setup

1. Navigate to the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:

   ```sh
   npm run dev
   ```

   The frontend runs on `http://localhost:5173`.

## Usage

1. Upload a video file via the `/upload` endpoint (e.g., using Postman or a frontend form).
2. The backend converts the video to HLS and serves it from `/uploads/courses/{lessonId}/index.m3u8`.
3. The React frontend plays the video using Video.js.

## Notes

- This is a proof-of-concept and not production-ready .
- No upload queue or authentication is implemented .
- FFmpeg must be installed and accessible from the command line .
  

## TO understand this concept Visit 
[Hitesh Chaudhary yt video ](https://www.youtube.com/watch?v=Hn0uZwjghng&t=3857s)

 


