# Little Champ School Management Website

A modern, responsive website for Little Champ School built with Next.js 14, TypeScript, and styled-components.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and styled-components
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Type Safety**: Full TypeScript support with proper type definitions
- **Testing**: Jest and React Testing Library setup
- **Code Quality**: ESLint and Prettier configuration
- **Database Ready**: Supabase integration prepared
- **Performance**: Optimized for speed and SEO

## 📋 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # Basic UI components (Button, Card, Container)
│   ├── layout/           # Layout components (Header, Footer)
│   └── ThemeProvider.tsx # Styled-components theme provider
├── lib/                  # Utility libraries
│   └── supabase.ts       # Supabase client configuration
├── styles/               # Styling
│   ├── theme.ts          # Design system theme
│   └── GlobalStyles.tsx  # Global CSS styles
└── types/                # TypeScript type definitions
    └── styled.d.ts       # Styled-components theme types
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: styled-components with custom theme
- **Database**: Supabase (configured)
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier
- **Fonts**: Inter (primary), Playfair Display (headings)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd school-management-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

The project uses a comprehensive design system with:

- **Colors**: Primary, secondary, accent, success, warning, error palettes
- **Typography**: Inter for body text, Playfair Display for headings
- **Spacing**: Consistent spacing scale (4px base unit)
- **Breakpoints**: Mobile-first responsive breakpoints
- **Shadows**: Subtle shadow system for depth
- **Border Radius**: Consistent border radius values

## 🧪 Testing

The project includes a comprehensive testing setup:

- **Unit Tests**: Component testing with React Testing Library
- **Type Checking**: TypeScript strict mode
- **Linting**: ESLint with Next.js and TypeScript rules
- **Code Formatting**: Prettier for consistent code style

## 📱 Responsive Design

The website is fully responsive with:

- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions
- Optimized images and assets

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Supabase Setup

1. Create a new Supabase project
2. Set up the database schema (see `src/lib/supabase.ts` for types)
3. Configure Row Level Security (RLS) policies
4. Add your credentials to `.env.local`

## 🚀 Deployment

The project is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📞 Support

For support or questions, please contact the development team.