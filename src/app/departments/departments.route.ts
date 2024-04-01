import { Router } from 'express'

import { validateRequest } from '../../middleware'
import { catchAsync } from '../../utils'

import {
	getDepartments,
	getDepartment,
} from './departments.controller'

const route = Router()

route.get('/', catchAsync(getDepartments))
route.get('/:departmentId', catchAsync(getDepartment))

export default route
