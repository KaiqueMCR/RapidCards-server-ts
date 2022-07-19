import { User } from '../../schemas/User'
import { Request, Response } from 'express'

export async function updateUser (req: Request, res: Response) {
  try {
    const { name, email, imageURL, avatarURL } = req.body
    await User.findByIdAndUpdate(
      {
        _id: req.params.user_id
      },
      {
        name,
        email,
        imageURL,
        avatarURL
      }
    )
    return res.json({ message: 'user updated successfully' })
  } catch (error) {
    return res.json(error)
  }
}
