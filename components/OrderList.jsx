import { useEffect, useState } from 'react'

export default function OrderList() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('/api/orders')
      .then(res => res.json())
      .then(setOrders)
  }, [])

  if (!orders.length) return <div className="text-white">주문 내역이 없습니다.</div>

  return (
    <div className="p-4 bg-gray-800 rounded text-white mt-4">
      <h2 className="text-lg font-bold mb-2">📦 주문 내역</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id} className="border-b border-gray-700 py-2">
            제품: {o.productName} / 수량: {o.quantity || 1} / 날짜: {new Date(o.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  )
}
