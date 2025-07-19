import { useContext } from "react"
import { ThemeContext } from "../components/ThemeProvider"

export default function DarkModeToggle() {
  const { dark, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-700 text-white p-2 rounded text-sm"
    >
      {dark ? "☀️ 라이트모드" : "🌙 다크모드"}
    </button>
  )
}
