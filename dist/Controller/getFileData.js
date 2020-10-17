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
const lodash_1 = require("lodash");
const mongoose_1 = require("mongoose");
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
exports.getCityWiseUserCount = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let fileId = lodash_1.get(req, 'query.fileId', undefined);
        if (lodash_1.isEmpty(fileId) || !mongoose_1.Types.ObjectId.isValid(fileId)) {
            return utils_1.RespondError(req, res, 422, errorMsg_1.errorMsgs.UNPROCESSABLE_ENTITY, errorMsg_1.errorMsgs.INVALID_QUERY_PARAMS);
        }
        const result = yield fileUpload_1.Graph.findById(fileId, { _id: 0, TransactionData: 1 });
        if (result == undefined) {
            return utils_1.RespondSuccess(req, res, 200, {}, "No Entry Found");
        }
        let cityWiseUser = {};
        for (let i = 0; i < result.TransactionData.length; i++) {
            if (cityWiseUser[result.TransactionData[i].City]) {
                cityWiseUser[result.TransactionData[i].City]++;
            }
            else {
                cityWiseUser[result.TransactionData[i].City] = 1;
            }
        }
        let cityNameArray = [];
        let userCountArray = [];
        for (let city in cityWiseUser) {
            cityNameArray.push(city);
            userCountArray.push(cityWiseUser[city]);
        }
        let cityGraph = {
            cityNameArray,
            userCountArray
        };
        return utils_1.RespondSuccess(req, res, 200, cityGraph, "CityWise Data Fetched with fileId " + fileId);
    }
    catch (err) {
        console.log('Error in Fetching File ', err);
        return utils_1.RespondError(req, res, 500, errorMsg_1.errorMsgs.INTERNAL_SERVER_ERROR, err.message);
    }
});
exports.getStateWiseUserCount = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let fileId = lodash_1.get(req, 'query.fileId', undefined);
        if (lodash_1.isEmpty(fileId) || !mongoose_1.Types.ObjectId.isValid(fileId)) {
            return utils_1.RespondError(req, res, 422, errorMsg_1.errorMsgs.UNPROCESSABLE_ENTITY, errorMsg_1.errorMsgs.INVALID_QUERY_PARAMS);
        }
        const result = yield fileUpload_1.Graph.findById(fileId, { _id: 0, TransactionData: 1 });
        if (result == undefined) {
            return utils_1.RespondSuccess(req, res, 200, {}, "No Entry Found");
        }
        let stateWiseUser = {};
        for (let i = 0; i < result.TransactionData.length; i++) {
            if (stateWiseUser[result.TransactionData[i].State]) {
                stateWiseUser[result.TransactionData[i].State]++;
            }
            else {
                stateWiseUser[result.TransactionData[i].State] = 1;
            }
        }
        let StateNameArray = [];
        let userCountArray = [];
        for (let state in stateWiseUser) {
            StateNameArray.push(state);
            userCountArray.push(stateWiseUser[state]);
        }
        let StateGraph = {
            StateNameArray,
            userCountArray
        };
        return utils_1.RespondSuccess(req, res, 200, StateGraph, "StateWise Data Fetched with fileId " + fileId);
    }
    catch (err) {
        console.log('Error in Fetching File ', err);
        return utils_1.RespondError(req, res, 500, errorMsg_1.errorMsgs.INTERNAL_SERVER_ERROR, err.message);
    }
});
exports.getProductWiseUserCount = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let fileId = lodash_1.get(req, 'query.fileId', undefined);
        if (lodash_1.isEmpty(fileId) || !mongoose_1.Types.ObjectId.isValid(fileId)) {
            return utils_1.RespondError(req, res, 422, errorMsg_1.errorMsgs.UNPROCESSABLE_ENTITY, errorMsg_1.errorMsgs.INVALID_QUERY_PARAMS);
        }
        const result = yield fileUpload_1.Graph.findById(fileId, { _id: 0, TransactionData: 1 });
        if (result == undefined) {
            return utils_1.RespondSuccess(req, res, 200, {}, "No Entry Found");
        }
        let ProductWiseSeller = {};
        for (let i = 0; i < result.TransactionData.length; i++) {
            if (ProductWiseSeller[result.TransactionData[i].Product]) {
                ProductWiseSeller[result.TransactionData[i].Product]++;
            }
            else {
                ProductWiseSeller[result.TransactionData[i].Product] = 1;
            }
        }
        let ProductNameArray = [];
        let userCountArray = [];
        for (let product in ProductWiseSeller) {
            ProductNameArray.push(product);
            userCountArray.push(ProductWiseSeller[product]);
        }
        let ProductGraph = {
            ProductNameArray,
            userCountArray
        };
        return utils_1.RespondSuccess(req, res, 200, ProductGraph, "ProductWise Data Fetched with fileId " + fileId);
    }
    catch (err) {
        console.log('Error in Fetching File ', err);
        return utils_1.RespondError(req, res, 500, errorMsg_1.errorMsgs.INTERNAL_SERVER_ERROR, err.message);
    }
});
exports.getPaymentWiseUserCount = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        let fileId = lodash_1.get(req, 'query.fileId', undefined);
        if (lodash_1.isEmpty(fileId) || !mongoose_1.Types.ObjectId.isValid(fileId)) {
            return utils_1.RespondError(req, res, 422, errorMsg_1.errorMsgs.UNPROCESSABLE_ENTITY, errorMsg_1.errorMsgs.INVALID_QUERY_PARAMS);
        }
        const result = yield fileUpload_1.Graph.findById(fileId, { _id: 0, TransactionData: 1 });
        if (result == undefined) {
            return utils_1.RespondSuccess(req, res, 200, {}, "No Entry Found");
        }
        let paymentWiseUser = {};
        for (let i = 0; i < result.TransactionData.length; i++) {
            if (paymentWiseUser[result.TransactionData[i].Payment_Type]) {
                paymentWiseUser[result.TransactionData[i].Payment_Type]++;
            }
            else {
                paymentWiseUser[result.TransactionData[i].Payment_Type] = 1;
            }
        }
        let PaymentTypeArray = [];
        let userCountArray = [];
        for (let paymentMethod in paymentWiseUser) {
            PaymentTypeArray.push(paymentMethod);
            userCountArray.push(paymentWiseUser[paymentMethod]);
        }
        let PaymentGraph = {
            PaymentTypeArray,
            userCountArray
        };
        return utils_1.RespondSuccess(req, res, 200, PaymentGraph, "PaymentMethod Wise Data Fetched with fileId " + fileId);
    }
    catch (err) {
        console.log('Error in Fetching File ', err);
        return utils_1.RespondError(req, res, 500, errorMsg_1.errorMsgs.INTERNAL_SERVER_ERROR, err.message);
    }
});
//# sourceMappingURL=getFileData.js.map