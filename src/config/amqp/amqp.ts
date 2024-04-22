import * as amqp from 'amqplib'

export let channel: amqp.Channel
export let connection: amqp.Connection

export const connectAMQP = async () => {
	try {
		connection = await amqp.connect('amqp://guest:guest@localhost:5672')
		channel = await connection.createChannel()

		await channel.assertQueue('books:store')
		await channel.assertQueue('books:update')

		await channel.assertQueue('product:store')
		await channel.assertQueue('product:update')
		await channel.assertQueue('product:delete')

		console.log('berhasil terhubung ke amqp')

		connection.on('close', function () {
			console.error('[AMQP] reconnecting')
			return setTimeout(connectAMQP, 1000)
		})
	} catch (error) {
		console.log(error)
	}
}

// google pub/sub
// aws event
// rabbitmq -> amqp -> mqtt
// kafka
// nats -> mqtt -> amqp
// redis
