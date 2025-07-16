import { useState, useEffect } from 'react'

export default function AdminNotices() {
  const [notices, setNotices] = useState([])
  const [newNotice, setNewNotice] = useState('')

  useEffect(() => {
    fetch('/api/notices')
      .then(res => res.json())
      .then(data => setNotices(data))
  }, [])

  const addNotice = async () => {
    const res = await fetch('/api/notices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newNotice }),
    })
    if (res.ok) {
      const updated = await res.json()
      setNotices(updated)
      setNewNotice('')
    }
  }

  return (
    <div className="p-4 bg-gray-800 rounded text-white">
      <h2 className="text-lg font-bold mb-2">공지사항 관리</h2>
      <ul className="mb-4">
        {notices.map((n, i) => (
          <li key={i} className="mb-1">📢 {n.content}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newNotice}
        onChange={(e) => setNewNotice(e.target.value)}
        placeholder="새 공지사항 입력"
        className="w-full mb-2 p-2 rounded bg-gray-700"
      />
      <button onClick={addNotice} className="bg-blue-600 px-4 py-2 rounded">
        추가
      </button>
    </div>
  )
}
