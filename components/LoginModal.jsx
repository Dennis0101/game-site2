export default function LoginModal({ show, onClose }) {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-bold mb-4">로그인</h2>
        <input
          type="text"
          placeholder="아이디"
          className="w-full p-2 mb-2 bg-gray-800 rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full p-2 mb-4 bg-gray-800 rounded"
        />
        <button className="bg-blue-600 w-full py-2 rounded">로그인</button>
        <button onClick={onClose} className="text-sm mt-2 underline">닫기</button>
      </div>
    </div>
  )
}
