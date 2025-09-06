# Côte Royale Paris

A luxury fragrance website built with Next.js 15, Prismic CMS, and modern web technologies. Features an elegant dark theme with smooth animations and responsive design.

## 🌟 Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **CMS Integration**: Prismic headless CMS for content management
- **Smooth Animations**: GSAP animations with scroll triggers
- **Responsive Design**: Mobile-first approach with elegant UI
- **Performance Optimized**: Static generation, image optimization, and caching
- **SEO Ready**: Proper metadata, Open Graph, and structured data

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Prismic account and repository

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cote-royel

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your-prismic-repo-name
PRISMIC_ACCESS_TOKEN=your-access-token # Optional for public repos
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── fragrance/      # Dynamic fragrance pages
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── Bounded.tsx     # Layout wrapper
│   ├── FadeIn.tsx      # Animation component
│   ├── Navbar.tsx      # Navigation
│   └── Footer.tsx      # Footer
├── slices/            # Prismic slice components
└── utils/             # Utility functions
```

## 🎨 Pages

- **Home** (`/`) - Hero section with featured fragrances
- **About** (`/about`) - Brand story and values
- **Contact** (`/contact`) - Contact form and information
- **Fragrance** (`/fragrance/[uid]`) - Individual fragrance details

## 🛠️ Built With

- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Prismic
- **Animations**: GSAP with ScrollTrigger
- **Icons**: Heroicons
- **Fonts**: Raleway, Custom Gambrino

## 📦 Build & Deploy

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/cote-royel)

1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically

### Other Platforms

- **Netlify**: `pnpm build` → Deploy `out/` folder
- **Railway**: Connect repository with build command `pnpm build`
- **DigitalOcean**: Use App Platform with Node.js buildpack

## 🔧 Configuration

### Prismic Setup

1. Create a Prismic repository
2. Import the custom types from `customtypes/`
3. Add your repository name to environment variables
4. Configure preview URLs in Prismic dashboard

### Performance

- Images are optimized with Next.js Image component
- Static pages are pre-generated at build time
- Prismic content is cached with revalidation
- Bundle size optimized with tree shaking

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email contact@coteroyaleparis.com or create an issue in the repository.
