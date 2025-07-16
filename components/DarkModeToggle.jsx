import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-700 text-white p-2 rounded text-sm"
    >
      {dark ? "☀️ 라이트모드" : "🌙 다크모드"}
    </button>
  )
}
