import { Post } from '../../schemas/Post'
import { User } from '../../schemas/User'
import { Request, Response } from 'express'
import { hasUserReachedPostsLimit } from '../../validations/hasUserReachedPostsLimit'

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
  const reachedPostsLimit = await hasUserReachedPostsLimit(req.body.user)

  if (reachedPostsLimit) return res.status(401).send({ message: 'User reached posts limit' })

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
