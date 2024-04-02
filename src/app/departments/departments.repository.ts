import { type QueryParams } from '../../interface'
import { PrismaClient, type Departments } from '../../prisma/client'
import { queryStatus } from '../../utils'

const db = new PrismaClient()

export const getDepartments = async (query: QueryParams) => {
	const { page = '1', perPage = '10', search = '' } = query

	return await db.departments.findMany({
		where: {
			name: {
				contains: search,
			},
			deletedAt: null,
		},
		skip: (Number(page) - 1) * Number(perPage),
		take: Number(perPage),
	})
}

export const getCountDepartments = async (query: QueryParams) => {
	const { search = '' } = query

	return await db.departments.count({
		where: {
			name: {
				contains: search,
			},
			deletedAt: null,
		},
	})

}

export const getDepartment = async (departmentId: number) => {
	return await db.departments.findUnique({
		where: {
			id: departmentId,
		},
	})
}

export const createDepartment = async (data: Departments) => {
	return await db.departments.create({
		data: {
			name: data.name,
		},
	})
}

export const updateDepartment = async (departmentId: number, data: Departments) => {
	return await db.departments.update({
		where: {
			id: departmentId,
		},
		data: {
			name: data.name,
		},
	})
}

export const deleteDepartment = async (departmentId: number) => {
	return await db.departments.update({
		where: {
			id: departmentId,
		},
		data: {
			deletedAt: new Date(),
		},
	})
}
