import { ERROR_CODE, type QueryParams } from '../../interface'
import { AppError } from '../../middleware'
import { metaPagination } from '../../utils'

import { departmentDTOMapper, departmentsDTOMapper } from './departments.mapper'
import * as departmentRepository from './departments.repository'

export const getDepartments = async (query: QueryParams) => {
	const { page = '1', perPage = '10' } = query
	const [departments, totalData] = await Promise.all([
		departmentRepository.getDepartments(query),
		departmentRepository.getCountDepartments(query),
	])

	const meta = metaPagination(
		Number(page),
		Number(perPage),
		departments.length,
		totalData,
	)

	return { data: departmentsDTOMapper(departments), meta }
}

export const getDepartment = async (departmentId: number) => {
	const department = await departmentRepository.getDepartment(departmentId)
	if (!department) {
		return new AppError(ERROR_CODE.NOT_FOUND.code, 'Department not found')
	}
	return departmentDTOMapper(department)
}