import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';

import '../globals.css';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { isLocale, locales, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { manrope } from '@/lib/fonts';
import { siteUrl } from '@/lib/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f2' },
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
  ],
};

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.meta.homeTitle,
      template: '%s — Doku',
    },
    description: t.meta.homeDescription,
    applicationName: 'Doku',
    // Only the production domain gets indexed — dev.dokutravel.com and Vercel
    // preview URLs must never compete with it in search results.
    robots:
      process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production'
        ? { index: false, follow: false }
        : undefined,
  };
}

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header locale={locale} t={t} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}
