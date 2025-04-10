"use client";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export const Navigation = () => {
  const [isDark, setIsDark] = useState<Boolean | null>(null)

  const handleToogleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }

  return (
    <header className="w-full bg-white dark:bg-dark-blue shadow-md">
      <section className="max-w-7xl flex items-center justify-between mx-auto py-6 pl-4 xl:pl-0">
        <h1 className="text-lg sm:text-xl font-bold">
          Where in the world?
        </h1>
        <button onClick={handleToogleTheme} className="text-sm font-semibold px-6 py-2 rounded-md bg-transparent flex items-center space-x-2 transition-colors duration-200 cursor-pointer hover:bg-slate-200/50 hover:dark:bg-slate-100/10">
          {isDark ? 'Light' : 'Dark'} Mode
          {
            isDark ? (
              <Sun className="w-5 h-5 ml-2" />
            ) : (
              <Moon className="w-5 h-5 ml-2" />
            )
          }
        </button>
      </section>
    </header>
  )
}
