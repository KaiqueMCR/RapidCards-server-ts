import { Request, Response } from 'express'
import { User } from '../../schemas/User'

export async function getUser (req: Request, res: Response) {
  const { user } = req.params
  const requestedUser = await User.find({ name: user }).populate({ path: 'publishedPosts', options: { sort: { createdAt: -1 } } }).sort({ createdAt: -1 })
  return res.json(requestedUser)
}
