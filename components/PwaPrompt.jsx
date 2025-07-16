import { useEffect, useState } from "react"

export default function PwaPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShow(true)
    })
  }, [])

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
    }
  }

  if (!show) return null

  return (
    <div className="fixed bottom-5 left-5 bg-blue-600 text-white p-3 rounded shadow-lg z-50">
      앱으로 설치하고 사용해보세요!
      <button onClick={handleInstall} className="ml-3 underline">
        설치하기
      </button>
    </div>
  )
}
