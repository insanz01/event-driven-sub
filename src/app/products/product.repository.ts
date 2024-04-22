import { PrismaClient } from '../../prisma/client'

const db = new PrismaClient()

export const save = async (
	name: string,
	desc: string,
	quantity: number,
	price: number,
) => {
	return await db.product.create({
		data: {
			name,
			desc,
			quantity,
			price,
		},
	})
}

export const get = async (id: number) => {
	return await db.product.findUnique({
		where: {
			id,
		},
	})
}

export const update = async (id: number, data: any) => {
	return await db.product.update({
		where: {
			id,
		},
		data,
	})
}

export const drop = async (id: number) => {
	return await db.product.delete({
		where: {
			id,
		},
		select: {
			id: true,
		},
	})
}
