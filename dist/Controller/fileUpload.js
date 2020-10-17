"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const errorMsg_1 = require("../config/constants/errorMsg");
const fileUpload_1 = require("../models/fileUpload");
const csvDataExtractor_1 = require("../helper/csvDataExtractor");
const formatter_1 = require("../helper/formatter");
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const mongoose_1 = require("mongoose");
const path = require("path");
exports.fileUPload = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        if (req.file == undefined || path.extname(req.file.path) != '.csv') {
            return utils_1.RespondError(req, res, 500, errorMsg_1.errorMsgs.INTERNAL_SERVER_ERROR, "Incorrect file Format");
        }
        const fileData = new fileUpload_1.Graph();
        let TransactionData = yield csvDataExtractor_1.formatCSV(req.file.path);
        TransactionData = yield formatter_1.ChangeColStringToNumber(TransactionData, ['Price']);
        fileData.TransactionData = TransactionData;
        let fileReponse = yield fileData.save();
        if (req.file) {
            fs_1.unlinkSync(req.file.path);
        }
        return utils_1.RespondSuccess(req, res, 200, { FileId: fileReponse._id }, "File Saved Successfully with fileId " + fileReponse._id);
    }
    catch (err) {
        console.log('Error in Saving File ', err);
        if (req.file) {
            fs_1.unlinkSync(req.file.path);
        }
        return utils_1.RespondError(req, res, 500, errorMsg_1.errorMsgs.INTERNAL_SERVER_ERROR, err.message);
    }
});
exports.getFileData = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let fileId = lodash_1.get(req, 'query.fileId', undefined);
        if (lodash_1.isEmpty(fileId) || !mongoose_1.Types.ObjectId.isValid(fileId)) {
            return utils_1.RespondError(req, res, 422, errorMsg_1.errorMsgs.UNPROCESSABLE_ENTITY, errorMsg_1.errorMsgs.INVALID_QUERY_PARAMS);
        }
        const result = yield fileUpload_1.Graph.findById(fileId, { _id: 0, TransactionData: 1 });
        return utils_1.RespondSuccess(req, res, 200, result, "File Fetched Successfully with fileId " + fileId);
    }
    catch (err) {
        console.log('Error in Fetching File ', err);
        return utils_1.RespondError(req, res, 500, errorMsg_1.errorMsgs.INTERNAL_SERVER_ERROR, err.message);
    }
});
//# sourceMappingURL=fileUpload.js.map