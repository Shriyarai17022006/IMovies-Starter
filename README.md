# IMovies — Movie Ticket Booking Starter

A beginner-friendly movie booking project with:
- Movie cards, search, and genre filters
- Movie details, showtimes, seat selection, and booking summary
- Demo bookings saved in the browser (`localStorage`) so the frontend works immediately
- Optional Express + MongoDB backend starter for APIs and persistent data

## 1. Open in VS Code
1. Extract `IMovies-Starter.zip`.
2. In VS Code choose **File → Open Folder** and select `IMovies-Starter`.
3. Open **Terminal → New Terminal**.

## 2. Start the website (frontend)
```bash
cd frontend
npm install
npm run dev
```
Open the local URL shown in the terminal (usually `http://localhost:5173`).

**Important:** The movie catalogue and demo booking flow work without MongoDB or the backend. This is useful for first testing the UI.

## 3. Optional backend
Open a second terminal:
```bash
cd backend
npm install
```
Copy `.env.example` to `.env`, edit the values, then run:
```bash
npm run dev
```
MongoDB must be running and `MONGO_URI` must point to your database. The frontend demo currently uses browser storage; backend integration can be added after the UI is confirmed working.

## 4. Before publishing
- Do not upload `.env` or passwords/secrets to GitHub.
- Test the site locally first.
- A live Demo Link requires deploying the frontend (e.g. Netlify or Vercel).
- A GitHub Link requires pushing this folder to a GitHub repository.
- Demo movies, prices, and booking records are sample data, not live cinema inventory.
