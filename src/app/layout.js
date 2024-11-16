import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';
import { ThemeProvider } from 'next-themes';
import ThemeComponent from './components/ThemeComponent';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeModeScript } from 'flowbite-react';
// import Footer from './components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider>
            <ThemeComponent>
              <Header />
              {children}
              {/* <Footer /> */}
            </ThemeComponent>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}