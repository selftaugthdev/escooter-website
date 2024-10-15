'use client'

import Link from 'next/link'
import { useTheme } from '../app/contexts/ThemeContext'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300">
        <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold">E-Scooter Shop</h1>
            </Link>
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
        <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 E-Scooter Shop. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}