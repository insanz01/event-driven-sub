import Joi from 'joi'

import { joiGeneralMessage } from '../../utils'

export const createDepartmentSchema = Joi.object({
  name: Joi.string().required().messages(joiGeneralMessage),
  isActive: Joi.boolean().required().messages(joiGeneralMessage),
  divisionId: Joi.number().required().messages(joiGeneralMessage),
})

export const updateDepartmentSchema = Joi.object({
  name: Joi.string().optional().messages(joiGeneralMessage),
})
