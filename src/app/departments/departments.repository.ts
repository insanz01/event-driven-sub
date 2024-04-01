import { type QueryParams } from '../../interface'
import { PrismaClient, type Departments } from '../../prisma/client'
import { queryStatus } from '../../utils'

const db = new PrismaClient()

export const getDepartments = async (query: QueryParams) => {
	const { page = '1', perPage = '10', search = '', status } = query
	const isActive = queryStatus(status)

	return await db.category.findMany({
		where: {
			name: {
				contains: search,
			},
			isActive,
			deletedAt: null,
		},
		skip: (Number(page) - 1) * Number(perPage),
		take: Number(perPage),
	})
}

export const getCountDepartments = async (query: QueryParams) => {
	const { search = '', status } = query
	const isActive = queryStatus(status)

	return await db.category.count({
		where: {
			name: {
				contains: search,
			},
			isActive,
			deletedAt: null,
		},
	})

}

export const getDepartment = async (departmentId: number) => {
	return await db.category.findUnique({
		where: {
			id: departmentId,
		},
	})
}
