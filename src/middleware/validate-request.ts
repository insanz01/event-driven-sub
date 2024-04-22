import { type NextFunction, type Request, type Response } from 'express'
import type Joi from 'joi'

import { ResponseHandler } from '../utils'
import { cleanJoiErrorMessage } from '../utils/clean-joi-error-message'

export const validateRequest =
	(schema: Joi.ObjectSchema) =>
	(request: Request, response: Response, next: NextFunction) => {
		const { error } = schema.validate(request.body)
		if (error) {
			ResponseHandler.badRequest(next, cleanJoiErrorMessage(error))
			return
		}
		next()
	}
