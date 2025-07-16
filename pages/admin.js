import AdminNotices from '../components/AdminNotices'
import AdminProducts from '../components/AdminProducts'
import OrderList from '../components/OrderList'
import StockChart from '../components/StockChart'
import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const id = prompt('ID:')
    const pw = prompt('Password:')
    if (id === 'admin' && pw === 'admin') setIsAdmin(true)
  }, [])

  if (!isAdmin) return <div className="text-center mt-20">Access Denied</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <AdminProducts />
      <AdminNotices />
      <OrderList />
      <StockChart />
    </div>
  )
}
