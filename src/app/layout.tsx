import './globals.css';

import { Afacad } from 'next/font/google'
const afacad = Afacad({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // pick the weights you need
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
