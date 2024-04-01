import Joi from 'joi'

import { joiGeneralMessage } from '../../utils'

export const createRoleSchema = Joi.object({
	name: Joi.string().required().messages(joiGeneralMessage),
	isActive: Joi.boolean().required().messages(joiGeneralMessage),
})

