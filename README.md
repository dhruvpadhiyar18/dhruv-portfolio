# Modern Developer Portfolio

This is a modern developer portfolio website built with Next.js, Tailwind CSS, and other modern technologies.

## Features

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter cards.
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop.

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or later)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To run the development server, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is ready to be deployed on [Vercel](https://vercel.com/).

### Deploying to Vercel

1.  Push your code to a Git repository (e.g., GitHub).
2.  Sign up for a Vercel account at [vercel.com](https://vercel.com/).
3.  Connect your Git repository to Vercel.
4.  Vercel will automatically detect that you are using Next.js and will configure the build settings for you.
5.  Deploy the project.

Vercel will handle the rest, and your portfolio will be live in a few minutes.

## Customization

### Portfolio Data

All the portfolio data (skills, projects, achievements) is located in the `data/index.ts` file. You can easily update this file to reflect your own information.

### Styling

The global styles and color palette are defined in `app/globals.css`. You can customize the colors and other styles to match your personal brand. The typography is defined in `app/layout.tsx` and `tailwind.config.ts`.

### Placeholders

The project uses placeholder images for the profile picture, project screenshots, and OpenGraph image. You should replace these placeholders with your own images:

-   `public/profile-placeholder.svg`: Your profile picture.
-   `public/project-placeholder.svg`: Screenshots of your projects.
-   `public/og-image.svg`: Your OpenGraph image.
-   `public/favicon.svg`: Your favicon.
-   `public/apple-touch-icon.svg`: Your Apple touch icon.

You should also replace the placeholder URLs and social media handles in the following files:

-   `sections/Hero.tsx`
-   `sections/Contact.tsx`
-   `components/Footer.tsx`
-   `app/layout.tsx` (for SEO metadata)
