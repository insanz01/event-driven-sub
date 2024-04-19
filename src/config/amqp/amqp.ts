import * as amqp from 'amqplib'

// export let channel: amqp.Channel
// export let connection: amqp.Connection

// export const connectAMQP = async () => {
// 	try {
// 		const RABBITMQ_DSN = process.env.RABBITMQ_DSN ?? ''

// 		connection = await amqp.connect(RABBITMQ_DSN)
// 		channel = await connection.createChannel()

// 		await channel.assertQueue('books:store')
// 		await channel.assertQueue('books:update')

// 		connection.on('close', function () {
// 			console.error('[AMQP] reconnecting')
// 			return setTimeout(connectAMQP, 1000)
// 		})
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

export class AMQP {
	public static channel: amqp.Channel
	public static connection: amqp.Connection

	async init() {
		const RABBITMQ_DSN = process.env.RABBITMQ_DSN ?? ''

		AMQP.connection = await amqp.connect(RABBITMQ_DSN)
		AMQP.channel = await AMQP.connection.createChannel()
	}

	async registerQueue(queue: string) {
		await AMQP.channel.assertQueue(queue)
	}

	static async sendToQueue(queue: string, data: any) {
		try {
			AMQP.channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)))
		} catch (error) {
			console.log(error)
		}
	}

	async registerSubscriber(queue: string, fn: any) {
		let parsedData

		try {
			await AMQP.channel
				.consume(queue, async (data: any) => {
					console.log('Data received :', Buffer.from(data.content).toString())

					parsedData = JSON.parse(Buffer.from(data.content).toString())

					await fn(parsedData)

					AMQP.channel.ack(data)
				})
				.catch((error) => {
					console.log('error', error)
				})
		} catch (error) {
			console.log('error', error)
		}

		return parsedData
	}
}
