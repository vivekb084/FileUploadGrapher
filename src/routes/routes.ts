import { Router } from 'express'
import { fileUPload } from '../Controller/fileUpload'
import multer from 'multer'

const multerupload = multer({ dest: 'uploads' })

export const router: Router = Router()

/**********************Routes Starts*************************** */

 router.post('/api/uploadFile',multerupload.single("fileKey"),fileUPload)

/**********************Routes Ends*************************** */