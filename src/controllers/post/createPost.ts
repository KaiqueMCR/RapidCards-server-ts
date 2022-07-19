import { Post } from '../../schemas/Post'
import { User } from '../../schemas/User'
import { Request, Response } from 'express'

interface PostRequestBody extends Request {
  body: {
    title: String,
    content: String,
    imageURL: String,
    topics?: Array<String>,
    user: string
  }
}

export async function createPost (req: PostRequestBody, res: Response) {
  try {
    const { title, content, imageURL, topics, user } = req.body
    const post = new Post({
      title,
      content,
      imageURL,
      topics,
      user
    })
    const newPost = await post.save()
    // @ts-ignore
    await User.updateOne({ _id: user }, { $push: { publishedPosts: newPost._id } })
    return res.json(newPost)
  } catch (error) {
    return res.json(error)
  }
}
