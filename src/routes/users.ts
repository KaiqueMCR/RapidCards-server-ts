import * as userController from '../controllers/user'
import { Router } from 'express'

const routes = Router()

routes.get('/posts/:user', userController.getPostsByUser)
routes.get('/:user', userController.getUser)
routes.get('/', userController.getAllUsers)
routes.post('/', userController.createUser)
routes.put('/', userController.updateUser)
routes.delete('/', userController.deleteUser)

export default routes
