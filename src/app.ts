import * as dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import postsRoute from './routes/posts'
import topicsRoute from './routes/topics'
import authorRoute from './routes/users'

dotenv.config()

class App {
  public express = express()

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () {
    mongoose.connect(process.env.MONGODB_URL)
  }

  private routes () {
    this.express.use('/posts', postsRoute)
    this.express.use('/topics', topicsRoute)
    this.express.use('/users', authorRoute)
  }
}

export const app = new App().express
