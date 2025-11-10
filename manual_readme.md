# Elevated Everyday Eye 👁️

A web application built with **React, Vite, TypeScript, Tailwind CSS, shadcn-ui**, and integrated with **Supabase** for backend services.  
Originally scaffolded via Lovable AI, now customized with manual Supabase credentials.

---

## 🚀 Features
- 🔑 Authentication with Supabase
- 📦 Database integration for storing and syncing app data
- 🎨 Modern UI with Tailwind CSS and shadcn-ui components
- ⚡ Fast development and build using Vite
- 🛠️ TypeScript for type safety and maintainability

---

## 📂 Project Structure
```
elevated-everyday-eye/
├── public/              # Static assets
├── src/                 # React components, pages, hooks
├── supabase/            # Supabase config, migrations, SQL policies
├── index.html           # Entry HTML file
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind setup
└── .env                 # Environment variables (Supabase URL, keys)
```

---

## ⚙️ Setup Instructions
1. **Clone the repo**
   ```bash
   git clone https://github.com/CarolenePremLeela/elevated-everyday-eye.git
   cd elevated-everyday-eye
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file with:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment
- **GitHub Pages**: Serves static build files (`dist/`).
- **Limitations**: GitHub Pages is static-only. For dynamic Supabase features, consider deploying on **Vercel** or **Netlify**.
- Ensure environment variables are embedded at build time.

---

## 🧩 Tech Stack
- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + shadcn-ui
- **Backend**: Supabase (Postgres DB, Auth, RLS policies)
- **Tooling**: ESLint, PostCSS, Bun lockfile

---

## 📖 Project Flow Summary
1. **Initialization**  
   - App bootstraps via `index.html` → `src/main.tsx`.  
   - React renders the root component.

2. **Authentication**  
   - Supabase client initialized with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.  
   - Users log in/sign up via Supabase Auth.

3. **Data Fetching & Syncing**  
   - React components call Supabase queries (e.g., `supabase.from('table').select()`).
   - Row-Level Security (RLS) policies ensure only authorized users can access data.

4. **UI Rendering**  
   - Data displayed using shadcn-ui components styled with Tailwind.  
   - State management handled via React hooks.

5. **Deployment**  
   - Built with Vite → static files in `dist/`.  
   - Hosted on GitHub Pages (or optionally Vercel/Netlify for dynamic features).

---

## 📌 Next Steps
- Add detailed **API documentation** for Supabase queries.
- Write usage examples for each major component.
- Consider moving deployment to **Vercel** for smoother Supabase integration.
