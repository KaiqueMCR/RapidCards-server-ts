import { Post } from '../../schemas/Post'
import { Request, Response } from 'express'

interface RequestBody extends Request {
  body: {
    title: String,
    content: String,
    imageURL: String,
    topics?: Array<String>,
    author: {
      username: String,
      email: String,
      avatarURL?: String,
    }
  }
}

export async function createPost (req: RequestBody, res: Response) {
  try {
    const { title, content, imageURL, topics, author } = req.body
    const post = new Post({
      title,
      content,
      imageURL,
      topics,
      author
    })
    const newPost = await post.save()
    return res.json(newPost)
  } catch (error) {
    res.json(error)
  }
}
