import { type NextFunction, type Request, type Response } from 'express'

import { ERROR_CODE, type QueryParams } from '../../interface'
import { AppError } from '../../middleware'
import { ResponseHandler } from '../../utils'

import * as roleService from './roles.service'


export const getRoles = async (
	req: Request & { query: QueryParams },
	res: Response,
	next: NextFunction,
) => {
	const { query } = req
	const roles = await roleService.getRoles(query)
	if (roles instanceof AppError) {
		next(roles)
		return
	}
	ResponseHandler.ok(
		res,
		roles?.data,
		'Roles fetched successfully',
		roles?.meta,
	)
}

export const getRole = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { roleId } = req.params
	if (isNaN(Number(roleId))) {
		const error = new AppError(
			ERROR_CODE.BAD_REQUEST.code,
			'Invalid roleId',
		)
		next(error)
		return
	}
	const role = await roleService.getRole(Number(roleId))
	if (role instanceof AppError) {
		next(role)
		return
	}
	ResponseHandler.ok(res, role, 'Role fetched successfully')
}