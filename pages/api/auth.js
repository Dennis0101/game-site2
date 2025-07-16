import { auth } from '../../lib/firebaseAdmin'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body
    // 관리자 전용 예시 로그인: 이메일과 비밀번호 수동 검증
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      return res.json({ ok: true })
    }
    return res.status(401).json({ error: 'Unauthorized' })
  }
  res.status(405).end()
}
