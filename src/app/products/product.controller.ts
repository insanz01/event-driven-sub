import type { NextFunction, Request, Response } from 'express'

import { AppError } from '../../middleware'
import { ResponseHandler } from '../../utils'

import * as productService from './product.service'

export const storeProduct = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { body } = req
	const result = await productService.createProduct(body)
	if (result instanceof AppError) {
		next(result)
		return
	}
	return ResponseHandler.created(res, result, 'Product created successfully')
}

export const getProduct = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { id } = req.params
	const result = await productService.getProduct(parseInt(id))
	if (result instanceof AppError) {
		next(result)
		return
	}
	return ResponseHandler.ok(res, result, 'Product fetched successfully')
}

export const updateProduct = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { id } = req.params
	const { body } = req
	const result = await productService.updateProduct(parseInt(id), body)
	if (result instanceof AppError) {
		next(result)
		return
	}
	return ResponseHandler.ok(res, result, 'Product updated successfully')
}

export const deleteProduct = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { id } = req.params
	const result = await productService.deleteProduct(parseInt(id))
	if (result instanceof AppError) {
		next(result)
		return
	}
	return ResponseHandler.ok(res, result, 'Product deleted successfully')
}
