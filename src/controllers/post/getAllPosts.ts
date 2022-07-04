import { Response } from 'express'
import { Post } from '@schemas/Post'

export async function getAllPosts (res: Response) {
  const posts = await Post.find()

  return res.json(posts)
}
