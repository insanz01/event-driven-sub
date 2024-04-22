import Joi from 'joi'

import { generalMessage } from '../../utils'

export const productCreateSchema = Joi.object({
	name: Joi.string().required().messages(generalMessage),
	desc: Joi.string().required().messages(generalMessage),
	quantity: Joi.number().required().messages(generalMessage),
	price: Joi.number().required().messages(generalMessage),
})
