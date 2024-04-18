import { Router } from 'express'
import { catchAsync } from 'src/utils'

import { sendMessage } from './sample.controller'

const route = Router()

route.get('/send-msg', catchAsync(sendMessage))

export default route
