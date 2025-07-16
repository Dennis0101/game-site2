import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleBuy = (product) => {
    alert(`${product.name} 구매 진행!`)
    // 여기에 결제/로그인 로직 연결 가능
  }

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onBuyClick={handleBuy} />
      ))}
    </div>
  )
}
