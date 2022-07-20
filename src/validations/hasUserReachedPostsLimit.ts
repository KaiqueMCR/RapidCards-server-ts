import { User } from '../schemas/User'

async function hasUserReachedPostsLimit (userID: String) {
  const user = await User.findOne({ _id: userID })
  const userPostsCount = user!.publishedPosts.length
  if (userPostsCount <= 50) return false
  return true
}

export { hasUserReachedPostsLimit }
