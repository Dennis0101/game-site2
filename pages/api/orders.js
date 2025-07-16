import { db } from '../../lib/firebaseAdmin'

export default async function handler(req, res) {
  const col = db.collection('orders')
  if (req.method === 'GET') {
    const snap = await col.orderBy('createdAt', 'desc').get()
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    return res.json(list)
  }
  if (req.method === 'POST') {
    const data = req.body
    await col.add({ ...data, createdAt: Date.now() })
    const snap = await col.orderBy('createdAt', 'desc').get()
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    return res.json(list)
  }
  res.status(405).end()
}
