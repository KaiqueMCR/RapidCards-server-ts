import { Post } from '../../schemas/Post'
import { Request, Response } from 'express'

export async function getAllDifferentTopics (req: Request, res: Response) {
  try {
    const allTopics = await Post.distinct('topics')
    return res.json({ topics: allTopics })
  } catch (error) {
    return res.json(error)
  }
}
