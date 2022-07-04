import { Schema, model, Document } from 'mongoose'

interface PostInterface extends Document {
  title: String,
  content: String,
  topics?: Array<string>,
  imageURL: string,
  author: {
    name: string,
    email: string,
    avatarURL?: string,
  }
}

const PostSchema = new Schema({
  title: { type: 'string', required: true },
  content: { type: 'string', required: true },
  topics: [String],
  imageURL: { type: 'string', required: true },
  author: {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
    avatarURL: { type: 'string' }
  }
}, {
  timestamps: true
})

export const Post = model<PostInterface>('Post', PostSchema)
