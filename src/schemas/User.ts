import mongoose, { Schema, model, Document } from 'mongoose'

interface UserProps extends Document {
  name: string;
  email: string;
  publishedPosts: Array<mongoose.Schema.Types.ObjectId>;
  avatarURL: string;
  imageURL: string;
}

const UserSchema = new Schema({
  name: { type: 'string', required: true },
  email: { type: 'string', required: true, unique: true },
  avatarURL: { type: 'string', required: true },
  imageURL: { type: 'string', required: true },
  publishedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post', default: [] }]
}, {
  timestamps: true
})

export const User = model<UserProps>('User', UserSchema)
