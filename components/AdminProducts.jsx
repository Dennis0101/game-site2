import { useEffect, useState } from 'react'

export default function AdminProducts() {
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({ name: '', description: '', price: '', stock: '' })

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])

  const handleSubmit = async () => {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setProducts(data)
    setForm({ name: '', description: '', price: '', stock: '' })
  }

  return (
    <div className="p-4 bg-gray-800 rounded text-white mt-4">
      <h2 className="text-lg font-bold mb-2">상품 관리</h2>
      <ul className="mb-4">
        {products.map(p => (
          <li key={p.id} className="mb-1">
            🛒 {p.name} - {p.price}원 (재고: {p.stock})
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="이름"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full mb-2 p-2 rounded bg-gray-700"
      />
      <input
        type="text"
        placeholder="설명"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full mb-2 p-2 rounded bg-gray-700"
      />
      <input
        type="number"
        placeholder="가격"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        className="w-full mb-2 p-2 rounded bg-gray-700"
      />
      <input
        type="number"
        placeholder="재고"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
        className="w-full mb-2 p-2 rounded bg-gray-700"
      />
      <button onClick={handleSubmit} className="bg-green-600 px-4 py-2 rounded">
        상품 추가
      </button>
    </div>
  )
}
