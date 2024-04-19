import * as bookRepository from 'src/app/books/book.repository'
import { AMQP } from 'src/config/amqp'

export const subscribeBookStore = async () => {
	try {
		await AMQP.channel
			.consume('books:store', async (data: any) => {
				console.log('Data received :', Buffer.from(data.content).toString())

				const book = JSON.parse(Buffer.from(data.content).toString())
				await bookRepository.save(book)

				AMQP.channel.ack(data)
			})
			.catch((error) => {
				console.log('error', error)
			})
	} catch (error) {
		console.log('error', error)
	}
}

export const subscribeBookUpdate = async () => {
	try {
		await AMQP.channel
			.consume('books:update', async (data: any) => {
				console.log('Data received :', Buffer.from(data.content).toString())

				const book = JSON.parse(Buffer.from(data.content).toString())
				await bookRepository.update(book)

				AMQP.channel.ack(data)
			})
			.catch((error) => {
				console.log('error_1', error)
			})
	} catch (error) {
		console.log('error_2', error)
	}
}
