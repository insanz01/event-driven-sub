import { Router } from 'express'
import { catchAsync } from 'src/utils'

import { getAllBooks } from './book.controller'

const route = Router()

route.get('/', catchAsync(getAllBooks))

export default route
