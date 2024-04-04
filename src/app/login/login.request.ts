import Joi from 'joi'

import { generalMessage } from '../../utils'

export const loginOtpSchema = Joi.object({
	type: Joi.string()
		.valid('WHATSAPP', 'SMS')
		.required()
		.messages(generalMessage),
	phoneNumber: Joi.string().empty('').messages(generalMessage),
	email: Joi.string().empty('').messages(generalMessage),
})
