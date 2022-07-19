import { User } from '../../schemas/User'
import { Request, Response } from 'express'

export async function getAllUsers (req: Request, res: Response) {
  try {
    const users = await User.find().sort({ createdAt: -1 })
    return res.json(users)
  } catch (error) {
    return res.json(error)
  }
}
