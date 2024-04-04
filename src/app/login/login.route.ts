import { Router } from 'express'
import { validateRequest } from 'src/middleware'
import { catchAsync, limiter } from 'src/utils'

import { loginOtp } from './login.controller'
import { loginOtpSchema } from './login.request'
const route = Router()

route.post(
	'/otp',
	limiter,
	validateRequest(loginOtpSchema),
	catchAsync(loginOtp),
)

export default route
