import { Post } from '../../schemas/Post'
import { Request, Response } from 'express'

export async function getAllPosts (req: Request, res: Response) {
  const posts = await Post.find()
  res.json(posts)
}
