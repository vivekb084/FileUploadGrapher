"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getFileData_1 = require("../Controller/getFileData");
const multer_1 = __importDefault(require("multer"));
const path = require("path");
const getFileData_2 = require("../Controller/getFileData");
const fileUpload_1 = require("../Controller/fileUpload");
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
    }
});
const multerupload = multer_1.default({ storage: storage });
exports.router = express_1.Router();
/**********************Routes Starts*************************** */
exports.router.get('/api/getFileData', getFileData_1.getFileData);
exports.router.get('/api/getCityWiseUser', getFileData_1.getCityWiseUserCount);
exports.router.get('/api/getStateWiseUser', getFileData_1.getStateWiseUserCount);
exports.router.get('/api/getProductWiseUser', getFileData_2.getProductWiseUserCount);
exports.router.get('/api/getPaymentWiseUser', getFileData_1.getPaymentWiseUserCount);
exports.router.post('/api/uploadFile', multerupload.single("fileKey"), fileUpload_1.fileUPload);
/**********************Routes Ends*************************** */ 
//# sourceMappingURL=routes.js.map