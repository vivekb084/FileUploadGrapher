"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileUpload_1 = require("../Controller/fileUpload");
exports.router = express_1.Router();
/**********************Routes Starts*************************** */
exports.router.get('/api/uploadFile', fileUpload_1.fileUPload);
/**********************Routes Ends*************************** */ 
//# sourceMappingURL=routes.js.map