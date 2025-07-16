import { db } from '../../lib/firebaseAdmin'

export default async function handler(req, res) {
  const col = db.collection('feedbacks')
  if (req.method === 'GET') {
    const snap = await col.orderBy('createdAt', 'desc').get()
    return res.json(snap.docs.map(d => d.data()))
  } 
  if (req.method === 'POST') {
    const { message } = req.body
    await col.add({ message, createdAt: Date.now() })
    return res.json({ ok: true })
  }
  res.status(405).end()
}
