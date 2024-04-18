import { channel, connection } from 'src/config/amqp'

export const sendData = async (data: any) => {
	channel.sendToQueue('test-queue', Buffer.from(JSON.stringify(data)))

	await channel.close()
	await connection.close()

	return true
}
