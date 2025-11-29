# BSING Wears

A full-stack fashion e-commerce platform for men, women, and teams. Built with React (frontend) and Node.js/Express/MongoDB (backend).

## Features

- Modern, responsive UI for desktop and mobile
- Hero section, featured products, testimonials, video showroom
- Shop, School, Brand, and Contact pages
- Full CRUD API for products, orders, users, enrollments, showrooms
- Authentication (optional, currently disabled)
- Centralized layout and mobile optimizations

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas (or local MongoDB)

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/Nattydread777/bsing-wears.git
   cd bsing-wears
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Create a `.env` file in `backend/` with your environment variables (see `.env.example` for template). **Do not commit your `.env` file.**

### Running Locally

- Start backend:
  ```bash
  cd backend
  npm run dev
  ```
- Start frontend:
  ```bash
  cd ../frontend
  npm run dev
  ```
- Visit `http://localhost:3000` for the frontend.

### Deployment

- Push to GitHub and connect your repo to Vercel for frontend deployment.
- For backend, deploy to services like Render, Heroku, or Railway.

## Folder Structure

```
bsing-wears/
  backend/
    controllers/
    models/
    routes/
    middleware/
    .env (not committed)
    server.js
    package.json
  frontend/
    src/
      assets/
      components/
      pages/
      App.jsx
      main.jsx
    public/
    package.json
```

## Environment Variables

- See `backend/.env.example` for required variables.
- **Never commit your `.env` file.**

## License

MIT
