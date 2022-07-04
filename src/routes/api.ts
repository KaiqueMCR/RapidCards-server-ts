import * as postController from '../controllers/post'
import { Router } from 'express'

const routes = Router()

routes.get('/', postController.getAllPosts)
routes.post('/', postController.createPost)
routes.get('/topics', postController.getPostsByTopic)
routes.get('/:author', postController.getPostsByAuthor)
routes.put('/:id', postController.updatePost)
routes.delete('/:id', postController.deletePost)

export default routes
