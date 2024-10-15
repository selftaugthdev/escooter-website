'use client'

import Link from 'next/link'
import { useTheme } from '../contexts/ThemeContext'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300">
        <header className="bg-blue-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <h1 className="text-1xl font-bold">E-Scooter Expert</h1>
            </Link>
            <nav className="flex space-x-4">
              <Link href="/about" className="text-white hover:text-blue-200 transition-colors duration-300">
                About
              </Link>
              <Link href="/" className="text-white hover:text-blue-200 transition-colors duration-300">
                All Brands
              </Link>
              <Link href="/reviews" className="text-white hover:text-blue-200 transition-colors duration-300">
                Reviews
              </Link>
            </nav>
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className="bg-white text-blue-600 hover:bg-blue-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </header>
        <main className="container mx-auto py-8">
          {children}
        </main>
        <footer className="bg-blue-800 text-white p-8 mt-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <nav className="flex flex-col space-y-2">
                  <Link href="/about" className="hover:text-blue-200 transition-colors duration-300">About</Link>
                  <Link href="/" className="hover:text-blue-200 transition-colors duration-300">All Brands</Link>
                  <Link href="/reviews" className="hover:text-blue-200 transition-colors duration-300">Reviews</Link>
                </nav>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <nav className="flex flex-col space-y-2">
                  <Link href="/privacy-policy" className="hover:text-blue-200 transition-colors duration-300">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="hover:text-blue-200 transition-colors duration-300">Terms of Service</Link>
                </nav>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p>Email: info@escooterexpert.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 E-Scooter Expert. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}