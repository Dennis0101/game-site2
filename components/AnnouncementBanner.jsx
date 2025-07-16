import { useEffect, useState } from 'react'

export default function AnnouncementBanner() {
  const [notices, setNotices] = useState([])

  useEffect(() => {
    fetch('/api/notices')
      .then(res => res.json())
      .then(setNotices)
  }, [])

  if (!notices.length) return null

  return (
    <div className="bg-blue-700 text-white text-sm p-2 text-center">
      {notices[notices.length - 1].content}
    </div>
  )
}
