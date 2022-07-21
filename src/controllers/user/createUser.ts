import { User } from '../../schemas/User'
import { Request, Response } from 'express'
import { userAlreadyExists } from '../../validations'

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
  const { alreadyExists, userID } = await userAlreadyExists(req.body.email)

  if (alreadyExists) {
    return res.status(200).send({ message: 'User already exists', userID })
  }

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
    return res.json(newUser)
  } catch (error) {
    return res.json(error)
  }
}
