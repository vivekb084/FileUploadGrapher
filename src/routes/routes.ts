import { Router } from 'express'
import { getCityWiseUserCount, getFileData, getPaymentWiseUserCount, getStateWiseUserCount } from '../Controller/getFileData'
import multer from 'multer'
import path = require("path")
import { getProductWiseUserCount } from '../Controller/getFileData'
import { fileUPload } from '../Controller/fileUpload'

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

router.get('/api/getFileData', getFileData);
router.get('/api/getCityWiseUser', getCityWiseUserCount);
router.get('/api/getStateWiseUser', getStateWiseUserCount);
router.get('/api/getProductWiseUser', getProductWiseUserCount);
router.get('/api/getPaymentWiseUser', getPaymentWiseUserCount);

router.post('/api/uploadFile', multerupload.single("fileKey"), fileUPload);


/**********************Routes Ends*************************** */