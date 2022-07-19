import * as postController from '../controllers/post'
import { Router } from 'express'

const routes = Router()

routes.get('/', postController.getAllPosts)
routes.post('/', postController.createPost)
routes.put('/:post_id', postController.updatePost)
routes.delete('/:post_id', postController.deletePost)

export default routes
