import { User } from './../schemas/User'

async function userAlreadyExists (userEmail: String) {
  const user = await User.findOne({ email: userEmail })
  if (user) return { alreadyExists: true, userID: user._id }
  return { alreadyExists: false }
}

export { userAlreadyExists }
