import { Router } from 'express'
import { fileUPload } from '../Controller/fileUpload'
import multer from 'multer'
import path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })

const multerupload = multer({ storage: storage })

export const router: Router = Router()

/**********************Routes Starts*************************** */

 router.post('/api/uploadFile',multerupload.single("fileKey"),fileUPload)

/**********************Routes Ends*************************** */