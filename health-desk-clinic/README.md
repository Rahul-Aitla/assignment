# Health Desk Clinic

A modern, responsive health and wellness e-commerce website built with React and Vite.

## Features

- 🏥 Modern healthcare product showcase
- 💊 Product categories and best sellers
- ⭐ Customer testimonials
- 🤝 Charitable initiatives section
- 📱 Fully responsive design
- ✨ Premium UI/UX with smooth animations

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ESLint** - Code quality

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd health-desk-clinic
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally
```bash
npm install -g vercel
```

2. Run the deploy command
```bash
vercel
```

3. Follow the prompts to complete deployment

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

### Option 3: Deploy with Git Integration

1. Connect your repository to Vercel
2. Vercel will automatically deploy on every push to main branch

## Project Structure

```
health-desk-clinic/
├── src/
│   ├── assets/
│   │   └── images/         # Product and UI images
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── CategorySlider.jsx
│   │   ├── ProductCard.jsx
│   │   ├── TrustSection.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── CharitySection.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── public/                 # Static assets
├── vercel.json            # Vercel configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies

```

## Environment Variables

No environment variables are required for this project.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the development team.
