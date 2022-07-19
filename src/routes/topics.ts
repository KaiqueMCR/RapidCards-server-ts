import * as topicsController from '../controllers/topics'
import { Router } from 'express'

const routes = Router()

routes.get('/', topicsController.getAllDifferentTopics)
routes.get('/posts', topicsController.getPostsByTopic)

export default routes
