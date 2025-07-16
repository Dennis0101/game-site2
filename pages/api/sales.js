import { db } from '../../lib/firebaseAdmin'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const snap = await db.collection('orders').get()
    const stats = {}
    snap.docs.forEach(doc => {
      const o = doc.data()
      stats[o.productName] = (stats[o.productName] || 0) + (o.quantity || 0)
    })
    return res.json(stats)
  }
  res.status(405).end()
}
