import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './contexts/ThemeContext'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Scooter Expert',
  description: 'Find your perfect electric scooter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}