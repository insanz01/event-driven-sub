import { Router } from 'express'

import { validateRequest } from '../../middleware'
import { catchAsync } from '../../utils'

import {
	getRoles,
	getRole,
	createRole,
} from './roles.controller'
import {
	createRoleSchema,
} from './roles.request'

const route = Router()

route.post(
	'/',
	validateRequest(createRoleSchema),
	catchAsync(createRole),
)
route.get('/', catchAsync(getRoles))
route.get('/:roleId', catchAsync(getRole))

export default route
