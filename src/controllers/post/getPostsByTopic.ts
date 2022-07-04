import { Post } from '../../schemas/Post'
import { Request, Response } from 'express'

interface TopicsRequest extends Request {
  body: {
    topics?: Array<String>,
  }
}

export async function getPostsByTopic (req: TopicsRequest, res: Response) {
  try {
    const { topics } = req.body
    const postByTopics = await Post.find({ topics: { $all: topics } })
    return res.json(postByTopics)
  } catch (error) {
    res.json(error)
  }
}
