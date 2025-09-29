# Expense Tracker

A modern, responsive personal expense tracking application built with React, TypeScript, and Supabase.

## Features

- User authentication (Sign up/Sign in)
- Add, view, and manage personal expenses
- Categorize expenses (Food, Transport, Shopping, Bills, Entertainment, Other)
- Export expenses to CSV
- Secure data storage with Supabase
- Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (Database + Auth)
- **State Management**: React hooks
- **Routing**: React Router

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Supabase account

### 1. Clone the Repository

```bash
git clone https://github.com/MarkusIsaksson1982/expense_tracker.git
cd expense_tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Run the SQL migration in your Supabase SQL editor:
   - Copy the contents of `supabase/migrations/20240929152442_expenses.sql`
   - Execute it in the SQL editor

### 4. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Run the Application

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   └── AuthForm.tsx
│   ├── dashboard/
│   │   └── Dashboard.tsx
│   └── ui/                 # shadcn/ui components
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── integrations/
│   └── supabase/
│       └── client.ts
├── lib/
│   └── utils.ts
└── hooks/
    └── use-toast.ts
```

## Deployment

The app can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

For production deployment, make sure to:
1. Set production environment variables
2. Enable Row Level Security in Supabase
3. Configure authentication providers if needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).