import { Post } from '../../schemas/Post'
import { Request, Response } from 'express'

export async function getPostsByUser (req: Request, res: Response) {
  try {
    const { user } = req.params
    const postsByUser = await Post.aggregate([{ $match: { 'user.name': user } }]).sort({ createdAt: -1 })
    return res.json(postsByUser)
  } catch (error) {
    return res.json(error)
  }
}
