"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileUpload_1 = require("../Controller/fileUpload");
const multer_1 = __importDefault(require("multer"));
const multerupload = multer_1.default({ dest: 'uploads' });
exports.router = express_1.Router();
/**********************Routes Starts*************************** */
exports.router.post('/api/uploadFile', multerupload.single("fileKey"), fileUpload_1.fileUPload);
/**********************Routes Ends*************************** */ 
//# sourceMappingURL=routes.js.map