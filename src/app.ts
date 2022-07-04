import * as dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config()

class App {
  public express = express()

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () {
    mongoose.connect(process.env.MONGODB_URL)
  }
}

export const app = new App().express
