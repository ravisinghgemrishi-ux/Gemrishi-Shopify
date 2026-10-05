import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'GemRishi — Authentic Vedic Gems',
  description: 'Natural and certified gemstones, thoughtfully selected by GemRishi.'
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <>{children}</>;
}
