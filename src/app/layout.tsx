import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Los Analistas - Pronósticos Deportivos Premium",
  description:
    "La plataforma líder en pronósticos deportivos. Predicciones expertas para fútbol, tenis y más deportes con análisis profesional.",
  keywords:
    "pronósticos deportivos, apuestas deportivas, predicciones fútbol, análisis deportivo, tips deportivos",
  authors: [{ name: "Los Analistas Team" }],
  creator: "Los Analistas",
  publisher: "Los Analistas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://los-analistas.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Los Analistas - Pronósticos Deportivos Premium",
    description:
      "La plataforma líder en pronósticos deportivos con análisis profesional y predicciones expertas.",
    url: "https://los-analistas.vercel.app",
    siteName: "Los Analistas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Los Analistas - Pronósticos Deportivos",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Analistas - Pronósticos Deportivos Premium",
    description:
      "La plataforma líder en pronósticos deportivos con análisis profesional.",
    images: ["/twitter-image.jpg"],
    creator: "@losanalistas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0ea5e9",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Los Analistas",
    "application-name": "Los Analistas",
    "msapplication-TileColor": "#0ea5e9",
    "theme-color": "#0ea5e9",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0ea5e9" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* PWA & Mobile Optimizations */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Los Analistas" />
        <meta name="application-name" content="Los Analistas" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="theme-color" content="#0ea5e9" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for common CDNs */}
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Disable automatic phone number detection */}
        <meta name="format-detection" content="telephone=no" />

        {/* Disable automatic translation */}
        <meta name="google" content="notranslate" />
      </head>
      <body
        className={`${inter.className} antialiased bg-gray-50 text-gray-900 overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Saltar al contenido principal
        </a>

        {/* Main content */}
        <div id="main-content" className="min-h-screen">
          {children}
        </div>

        {/* Performance and Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window && 'measure' in window.performance) {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                  }, 0);
                });
              }
              
              // Service Worker Registration (for PWA capabilities)
              if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
