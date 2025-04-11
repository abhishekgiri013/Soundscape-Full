# 🎵 Audio Playlist Web Application

This project is a full-stack audio playlist web application that allows users to view curated sound playlists categorized by genres such as Lo-Fi, Nature, Meditation, etc. Users can play/pause audio tracks with an interactive UI.

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, Lucide React Icons, React Icons
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Storage:** File uploads for images (JPG/PNG) and audio files (MP3)

---

## 🔗 API Endpoints

### ➤ Create Category

- **Method:** `POST`
- **URL:** `http://localhost:5000/api/categories`
- **Body (form-data):**
  - `name`: `"Lo-Fi"`
  - `image`: `[upload image file - JPG or PNG]`

### ➤ Upload Sound

- **Method:** `POST`
- **URL:** `http://localhost:5000/api/sounds`
- **Body (form-data):**
  - `category_id`: `[Paste the _id of category created above]`
  - `audio`: `[upload an audio file - MP3 format]`

### ➤ Get All Categories

- **Method:** `GET`
- **URL:** `http://localhost:5000/api/categories`

### ➤ Get All Sounds with Populated Category Info

- **Method:** `GET`
- **URL:** `http://localhost:5000/api/sounds`

---

## 🎨 Frontend Features

- **Category-wise Playlist View:** Each sound is grouped under its respective category.
- **Audio Playback:**
  - Clickable play/pause button
  - Real-time progress bar with seek support
  - Display of track name and duration
- **Responsive UI:** Flexbox-based layout adapts to screen sizes with scrollable tracks
- **Dynamic Rendering:** Fetches audio and category data from backend using Axios


cd Soundscape
npm install
npm run dev

cd Soundscape-backend
npm install
npm run server

---



