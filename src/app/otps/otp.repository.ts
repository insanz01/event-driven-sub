import { PrismaClient } from 'src/prisma/client'

const db = new PrismaClient()

export const setOtp = async (
	email: string,
	otp: string,
	token: string,
	expiry: Date,
) => {
	return await db.oTP.create({
		data: {
			email,
			otp,
			token,
			expiry,
		},
	})
}

export const getOtp = async (token: string) => {
	return await db.oTP.findFirst({
		where: {
			token,
		},
	})
}

export const deleteOtp = async (token: string) => {
	return await db.oTP.delete({
		where: {
			token,
		},
	})
}
