import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { MainNav } from '@/components/main-nav';
import { Footer } from '@/components/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vijay Gupta | MERN Stack Developer',
  description:
    "I'm Vijay Gupta, a MERN stack developer specializing in building scalable web applications with React, Node.js, Express, and MongoDB.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Vijay Gupta | MERN Stack Developer',
    description:
      "I'm Vijay Gupta, a MERN stack developer specializing in building scalable web applications with React, Node.js, Express, and MongoDB.",
      siteName: 'Vijay Gupta Portfolio',
      // url: 'https://vijaygupta.dev',
    // images: [{ url: 'https://vijaygupta.dev/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'profile',
    firstName: 'Vijay',
    lastName: 'Gupta',
  },
  twitter: {
    // card: 'summary_large_image',
    title: 'Vijay Gupta | MERN Stack Developer',
    description:
      "I'm Vijay Gupta, a MERN stack developer specializing in building scalable web applications with React, Node.js, Express, and MongoDB.",
    // images: ['https://vijaygupta.dev/og.png'],
    // creator: '@vijaygupta_',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: 'google-site-verification=8fX5J9d1k1k1k1k1k1k1k1k1k1k1k1',
    yandex: 'yandex-verification: 1234567890abcdef',
    other: {
      Bing: '1234567890abcdef',
      Pinterest: '1234567890abcdef',
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Vijay Gupta Portfolio',
    // startupImage: '/apple-touch-icon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://vijaygupta.dev',
    languages: {
      'en-US': '/en',
      'es-ES': '/es',
      'fr-FR': '/fr',
      'hi-IN': '/hi',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* ✅ Google Tag Manager (GTM) */}
        <Script
          id='google-tag-manager'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NVHRCD3G');
            `,
          }}
        />
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-NVHRCD3G'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex min-h-screen flex-col'>
            <MainNav />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
