import { Post } from '../../schemas/Post'
import { Request, Response } from 'express'

export async function deletePost (req: Request, res: Response) {
  await Post.deleteOne({ _id: req.params.post_id })

  return res.json({ message: 'post deleted successfully' })
}
