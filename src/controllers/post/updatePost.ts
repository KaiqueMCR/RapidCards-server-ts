import { Post } from '@schemas/Post'
import { Request, Response } from 'express'

export async function updatePost (req: Request, res: Response) {
  const { title, content, imageURL, topics, author } = req.body

  await Post.findByIdAndUpdate(
    {
      _id: req.params.post_id
    },
    {
      title,
      content,
      imageURL,
      topics,
      author
    }
  )

  return res.json({ message: 'post updated successfully' })
}
