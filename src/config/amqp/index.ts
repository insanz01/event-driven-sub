import * as bookRepository from 'src/app/books/book.repository'

import { AMQP } from './amqp'

export * from './amqp'

export const initAMQP = async () => {
	try {
		const amqp = new AMQP()
		await amqp.init()

		await amqp.registerQueue('books:store')
		await amqp.registerQueue('books:update')

		// register subscriber
		await amqp.registerSubscriber('books:store', bookRepository.save)
		await amqp.registerSubscriber('books:update', bookRepository.update)
	} catch (error) {
		console.log(error)
	}
}
