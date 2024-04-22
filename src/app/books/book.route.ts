import { Router } from 'express'

import { validateRequest } from '../../middleware'
import { catchAsync } from '../../utils'

import { getAllBooks, storeBook, updateBook } from './book.controller'
import { bookCreateSchema } from './book.request'

const route = Router()

route.get('/', catchAsync(getAllBooks))
route.post('/', validateRequest(bookCreateSchema), catchAsync(storeBook))
route.put('/:id', validateRequest(bookCreateSchema), catchAsync(updateBook))

export default route
