import React from 'react'

export default function ProductCard({ product, onBuyClick }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold text-white">{product.name}</h2>
      <p className="text-gray-300 mt-2">{product.description}</p>
      <div className="text-sm text-gray-400 mt-1">재고: {product.stock}</div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-green-400 font-bold">{product.price}원</span>
        <button
          onClick={() => onBuyClick(product)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          구매
        </button>
      </div>
    </div>
  )
}
