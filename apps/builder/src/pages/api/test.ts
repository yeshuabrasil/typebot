import ky from 'ky'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ky.get('https://google.com')
  res.status(200).json({ name: 'John Doe' })
}
