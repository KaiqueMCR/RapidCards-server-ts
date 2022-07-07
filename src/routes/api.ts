import * as postController from '../controllers/post'
import { Router } from 'express'

const routes = Router()

routes.get('/', postController.getAllPosts)
routes.get('/topics', postController.getAllDifferentTopics)
routes.get('/topics/posts', postController.getPostsByTopic)
routes.get('/:author', postController.getPostsByAuthor)
routes.post('/', postController.createPost)
routes.put('/:post_id', postController.updatePost)
routes.delete('/:post_id', postController.deletePost)

export default routes
