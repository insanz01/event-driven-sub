import { Router } from 'express'

import { validateRequest } from '../../middleware'
import { catchAsync } from '../../utils'

import {
	storeProduct,
	getProduct,
	updateProduct,
	deleteProduct,
} from './product.controller'
import { productCreateSchema } from './product.request'

const route = Router()

route.post('/', validateRequest(productCreateSchema), catchAsync(storeProduct))
route.post('/:id', catchAsync(getProduct))
route.patch(
	'/:id',
	validateRequest(productCreateSchema),
	catchAsync(updateProduct),
)
route.delete('/:id', catchAsync(deleteProduct))

export default route
