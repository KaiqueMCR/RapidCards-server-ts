import * as dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import apiRoute from './routes/api'

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
    this.express.use('/api', apiRoute)
  }
}

export const app = new App().express
