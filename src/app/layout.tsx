import Navbar from '@/components/Navbar';
import './globals.css';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Sportswear</title>
      </head>
      <body>
        <SplashScreen/>
        <Navbar/>
        <main className='min-h-screen'>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
