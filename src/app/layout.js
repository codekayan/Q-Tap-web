import localFont from "next/font/local";
import "./[locale]/globals.css";
import HomeContextProvider from "./[locale]/context/homeContext.js";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import PusherProvider from "./[locale]/context/PusherProvider";
import { ToastContainer } from "react-toastify";
import ClientProviders from "@/component/ClientProviders/ClientProviders";

const geistSans = localFont({
  src: "./[locale]/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./[locale]/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Qtap",
  description: `Tap, Order, Pay and Eat Create a Smart menu suitable for any type of business. Engage more with your customers.`,
  icons: {
    icon: [
      { url: "/images/qtaptap.PNG", sizes: "32x32" }

    ],
  }
};

export default async function LocaleLayout({
  children,
  params
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    // notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="stylesheet" href="/assets/icons/style.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders >
          <HomeContextProvider>
            <NextIntlClientProvider>
              <PusherProvider>
                {children}
                <ToastContainer />
              </PusherProvider>
            </NextIntlClientProvider>
          </HomeContextProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
