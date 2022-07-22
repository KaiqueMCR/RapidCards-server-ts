import { Post } from '../../schemas/Post'
import { Request, Response } from 'express'
import { hasUserReachedPostsLimit } from '../../validations'
import { updateUserPublishedPosts } from '../../utils/updateUserPublisehPosts'

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
    await updateUserPublishedPosts(user, newPost._id)
    return res.json(newPost)
  } catch (error) {
    return res.json(error)
  }
}
