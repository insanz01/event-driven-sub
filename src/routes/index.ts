import { type NextFunction, type Request, type Response, Router } from 'express'

import categoriesRoute from '../app/categories/categories.route'
import subCategoriesRoute from '../app/sub-categories/sub-categories.route'
import usersRoute from '../app/users/users.route'
import { ERROR_CODE } from '../interface'
import { AppError } from '../middleware'
import { ResponseHandler } from '../utils'

const route = Router()

route.use('/categories', categoriesRoute)
route.use('/sub-categories', subCategoriesRoute)
route.use('/users', usersRoute)

route.get('/', (req: Request, res: Response) => {
	ResponseHandler.ok(res, null, 'Hello World 🌍🚀')
})

route.use('*', (req: Request, res: Response, next: NextFunction) => {
	const error = new AppError(ERROR_CODE.NOT_FOUND.code)
	next(error)
})

export default route
