import { type NextFunction, type Request, type Response } from 'express'

import { ERROR_CODE, type QueryParams } from '../../interface'
import { AppError } from '../../middleware'
import { ResponseHandler } from '../../utils'

import * as departmentService from './departments.service'

export const getDepartments = async (
	req: Request & { query: QueryParams },
	res: Response,
	next: NextFunction,
) => {
	const { query } = req
	const departments = await departmentService.getDepartments(query)
	if (departments instanceof AppError) {
		next(departments)
		return
	}
	ResponseHandler.ok(
		res,
		departments?.data,
		'Departments fetched successfully',
		departments?.meta,
	)
}

export const getDepartment = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { departmentId } = req.params
	if (isNaN(Number(departmentId))) {
		const error = new AppError(
			ERROR_CODE.BAD_REQUEST.code,
			'Invalid departmentId',
		)
		next(error)
		return
	}
	const department = await departmentService.getDepartment(Number(departmentId))
	if (department instanceof AppError) {
		next(department)
		return
	}
	ResponseHandler.ok(res, department, 'Department fetched successfully')
}
