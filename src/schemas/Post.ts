import { Request } from 'express'
import mongoose, { Schema, model } from 'mongoose'

interface PostProps extends Request {
  title: String;
  content: String;
  topics?: Array<string>;
  imageURL: string;
  user: mongoose.Schema.Types.ObjectId;
}

const PostSchema = new Schema({
  title: { type: 'string', required: true },
  content: { type: 'string', required: true },
  topics: [String],
  imageURL: { type: 'string', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

export const Post = model<PostProps>('Post', PostSchema)
