import { ObjectId } from 'mongoose'
import { User } from '../schemas/User'

export async function updateUserPublishedPosts (userID: string, postID: ObjectId) {
  await User.findByIdAndUpdate({ _id: userID }, { $push: { publishedPosts: postID } })
}
