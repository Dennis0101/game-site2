import { useState } from "react"

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input) return
    const userMsg = { type: "user", text: input }
    const botMsg = { type: "bot", text: "제품에 대한 문의 감사합니다. 확인 후 안내드리겠습니다." }
    setMessages([...messages, userMsg, botMsg])
    setInput("")
  }

  return (
    <>
      <button
        className="fixed bottom-4 right-4 bg-teal-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-72 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col">
          <div className="p-2 border-b border-gray-600">채팅</div>
          <div className="flex-1 overflow-y-auto p-2 h-60">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 my-1 rounded ${
                  msg.type === "user" ? "bg-blue-600 self-end" : "bg-gray-600 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-600 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-gray-700 p-2 rounded"
              placeholder="메시지 입력"
            />
            <button onClick={handleSend} className="ml-2 text-sm bg-blue-500 px-3 py-1 rounded">
              전송
            </button>
          </div>
        </div>
      )}
    </>
  )
}
