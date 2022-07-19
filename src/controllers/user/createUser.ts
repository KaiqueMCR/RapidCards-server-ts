import { User } from '../../schemas/User'
import { Request, Response } from 'express'

interface UserRequestBody extends Request {
  body: {
    name: string;
    email: string;
    publishedPosts: Array<String>;
    avatarURL: string;
    imageURL: string;
  }
}

export async function createUser (req: UserRequestBody, res: Response) {
  try {
    const { name, email, publishedPosts, avatarURL, imageURL } = req.body
    const user = new User({
      name,
      email,
      publishedPosts,
      avatarURL,
      imageURL
    })
    const newUser = await user.save()
    res.json(newUser)
  } catch (error) {
    res.json(error)
  }
}
