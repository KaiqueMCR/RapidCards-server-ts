import { Post } from '../../schemas/Post'
import { Request, Response } from 'express'

export async function getAllPosts (req: Request, res: Response) {
  try {
    const posts = await Post.find()
    return res.json(posts)
  } catch (error) {
    return res.json(error)
  }
}
