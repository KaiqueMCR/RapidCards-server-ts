import { User } from '../../schemas/User'
import { Request, Response } from 'express'

export async function deleteUser (req: Request, res: Response) {
  try {
    await User.deleteOne({ _id: req.params.user_id })
    return res.json({ message: 'user deleted successfully' })
  } catch (error) {
    return res.json(error)
  }
}
