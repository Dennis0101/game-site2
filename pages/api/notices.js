import { db } from '../../lib/firebaseAdmin'

export default async function handler(req, res) {
  const col = db.collection('notices')
  if (req.method === 'GET') {
    const snap = await col.orderBy('createdAt').get()
    return res.json(snap.docs.map(d => d.data()))
  }
  if (req.method === 'POST') {
    await col.add({ content: req.body.content, createdAt: Date.now() })
    const snap = await col.orderBy('createdAt').get()
    return res.json(snap.docs.map(d => d.data()))
  }
  res.status(405).end()
}
