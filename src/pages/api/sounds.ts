import { NextApiRequest, NextApiResponse } from 'next'
import { allSounds } from '../../data/sounds'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(allSounds)
}
