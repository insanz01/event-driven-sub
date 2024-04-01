import { type Departments } from '../../prisma/client'

import { type DepartmentDTO } from './departments.dto'


export const departmentDTOMapper = (department: Departments): DepartmentDTO => {
	return {
		id: department.id,
		name: department.name,
	}
}

export const departmentsDTOMapper = (departments: Departments[]): DepartmentDTO[] => {
	return departments.map((department) => departmentDTOMapper(department))
}
