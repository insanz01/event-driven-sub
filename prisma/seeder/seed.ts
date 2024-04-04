import { PrismaClient } from '../../src/prisma/client'
import { uuid } from '../../src/utils'
const prisma = new PrismaClient()
async function main() {
	const application = await prisma.applications.upsert({
		where: { id: 'initial-setup' },
		update: {},
		create: {
			id: uuid(),
			name: 'HSD',
			isActive: true,
		},
	})
	const roleAdmin = await prisma.roles.upsert({
		where: { name: 'Super Admin' },
		update: {},
		create: {
			name: 'Super Admin',
			isActive: true,
		},
	})
	const userAdmin = await prisma.user.upsert({
		where: { email: 'admin@hsd.com' },
		update: {},
		create: {
			id: uuid(),
			email: 'admin@hsd.com',
			phoneNumber: '08951231231',
			name: 'Super Admin',
			isActive: true,
		},
	})
	const applicationAccess = await prisma.applicationAccess.upsert({
		where: {
			id: 'initial-setup',
		},
		update: {},
		create: {
			id: uuid(),
			userId: userAdmin.id,
			applicationId: application.id,
			roleId: roleAdmin.id,
			isActive: true,
		},
	})
	console.log({ roleAdmin, userAdmin, application, applicationAccess })
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
