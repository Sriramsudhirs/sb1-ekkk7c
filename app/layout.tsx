import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import AuthProvider from '@/components/AuthProvider';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Background Remover - Professional Image Background Removal Tool',
  description: 'Remove backgrounds from images and videos instantly using AI. Perfect for e-commerce, professional photography, and digital art. Try our free background remover today.',
  keywords: 'background removal, AI image editing, remove background, transparent background, photo editing, bulk image processing',
  openGraph: {
    title: 'AI Background Remover - Professional Image Background Removal Tool',
    description: 'Remove backgrounds from images and videos instantly using AI.',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Background Remover - Professional Image Background Removal Tool',
    description: 'Remove backgrounds from images and videos instantly using AI.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-center" />
          </ThemeProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}