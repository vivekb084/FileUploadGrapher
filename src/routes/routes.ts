import { Router } from 'express'
import { fileUPload } from '../Controller/fileUpload'

export const router: Router = Router()

/**********************Routes Starts*************************** */

 router.get('/api/uploadFile',fileUPload)

/**********************Routes Ends*************************** */