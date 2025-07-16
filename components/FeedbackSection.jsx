import { useEffect, useState } from "react"

export default function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    fetch("/api/feedbacks")
      .then(res => res.json())
      .then(setFeedbacks)
  }, [])

  return (
    <div className="bg-gray-800 text-white p-4 mt-6 rounded">
      <h2 className="text-xl font-bold mb-3">🗣️ 사용자 피드백</h2>
      {feedbacks.map((f, i) => (
        <div key={i} className="border-b border-gray-600 py-2 text-sm">
          {f.message}
        </div>
      ))}
    </div>
  )
}
