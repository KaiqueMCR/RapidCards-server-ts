import { Post } from '../../schemas/Post'
import { Request, Response } from 'express'

export async function getPostsByAuthor (req: Request, res: Response) {
  try {
    const { author } = req.params
    const postsByAuthor = await Post.aggregate([{ $match: { 'author.name': author } }])
    return res.json(postsByAuthor)
  } catch (error) {
    return res.json(error)
  }
}
