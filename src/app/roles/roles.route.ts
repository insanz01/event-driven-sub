import { Router } from 'express'

import { validateRequest } from '../../middleware'
import { catchAsync } from '../../utils'

import {
	getRoles,
	getRole,
} from './roles.controller'

const route = Router()

route.get('/', catchAsync(getRoles))
route.get('/:roleId', catchAsync(getRole))

export default route
