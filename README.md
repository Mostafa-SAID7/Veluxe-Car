<div align="center">
  <img src="public/hero.jpg" alt="Veluxe Hero Image" width="100%" style="border-radius: 12px; margin-bottom: 20px;" />
  <h1 align="center">Veluxe — Premium Car Rental Landing Page</h1>
  <p align="center">
    A meticulously crafted, dark-first luxury car rental landing page built with modern web technologies. Features a seamless View Transition theme toggle, responsive design, and fluid animations.
  </p>
  
  <div>
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </div>
</div>

---

## ✨ Features

- 🌓 **Cinematic Theme System**: A perfectly tuned Dark/Light mode utilizing the native `View Transitions API` for a circular ripple reveal.
- 🎨 **Luxury Aesthetics**: High-end typography, glassmorphism overlays, and premium contrasting semantic tokens (powered by `oklch` color spaces).
- 📱 **Fully Responsive**: Flawless scaling from widescreen desktops down to mobile devices, with a custom mobile drawer menu.
- ⚡ **Performance First**: Built on Next.js App Router, ensuring lightning-fast load times and optimized image delivery.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/veluxe.git
   cd veluxe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or yarn install / pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `/app` — Next.js 15 App Router pages, layout, and global CSS (where theme tokens are defined).
- `/components` — Reusable UI components (Hero, Features, Pricing, Header, Footer).
- `/components/ui` — Shared micro-components like custom buttons and section dividers.
- `/public` — Static assets, images, and standard metadata files.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Themeing**: `next-themes`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
