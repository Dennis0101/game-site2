import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export default function DarkModeToggle() {
  const { dark, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 bg-gray-700 text-white p-2 rounded-full text-sm shadow-lg z-50"
    >
      {dark ? '☀️ 라이트모드' : '🌙 다크모드'}
    </button>
  )
}
