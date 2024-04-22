import { channel } from '../../config/amqp'
import { ERROR_CODE } from '../../interface'
import { AppError } from '../../middleware'

import * as productRepository from './product.repository'

const sendData = async (topic: string, data: any) => {
	channel.sendToQueue(topic, Buffer.from(JSON.stringify(data)))
}

export const createProduct = async (data: any) => {
	const product = await productRepository.save(
		data.name,
		data.desc,
		data.quantity,
		data.price,
	)

	if (!product) {
		throw new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Something went wrong',
		)
	}

	await sendData('product:store', {
		productId: product.id,
		name: product.name,
		quantity: product.quantity,
		price: product.price,
	})

	return product
}

export const getProduct = async (id: number) => {
	const product = await productRepository.get(id)

	if (!product) {
		throw new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Something went wrong',
		)
	}

	return product
}

export const updateProduct = async (id: number, data: any) => {
	const product = await productRepository.update(id, data)

	if (!product) {
		throw new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Something went wrong',
		)
	}

	await sendData('product:update', {
		productId: product.id,
		name: product.name,
		quantity: product.quantity,
		price: product.price,
	})

	return product
}

export const deleteProduct = async (id: number) => {
	const product = await productRepository.get(id)

	if (!product) {
		throw new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Something went wrong',
		)
	}

	const productId = await productRepository.drop(id)

	if (!productId) {
		throw new AppError(
			ERROR_CODE.INTERNAL_SERVER_ERROR.code,
			'Something went wrong',
		)
	}

	await sendData('product:delete', {
		productId,
	})

	return productId
}
