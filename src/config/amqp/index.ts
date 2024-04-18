import {
	subscribeBookStore,
	subscribeBookUpdate,
} from 'src/app/books/book.subscriber'

import { connectAMQP } from './amqp'

export * from './amqp'

export const initAMQP = async () => {
	try {
		await connectAMQP()

		// register subscriber
		await subscribeBookStore()
		await subscribeBookUpdate()
	} catch (error) {
		console.log(error)
	}
}
