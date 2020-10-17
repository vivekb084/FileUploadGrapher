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
exports.fileUPload = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        console.log("Req for file ", req.file.path);
        const fileData = new fileUpload_1.Graph();
        let temp = {
            TransactionDate: new Date(),
            Product: 'Testing',
            Price: 300,
            Payment_Type: 'Card',
            Name: 'Vivek',
            City: 'Bhtp',
            State: 'Raja',
            Country: 'Ind',
            AccountCreated: new Date(),
            LastLogin: new Date(),
            Longitude: "22323322",
            Latitude: "232423423"
        };
        fileData.TransactionData.push(temp);
        fileData.TransactionData.push(temp);
        fileData.TransactionData.push(temp);
        fileData.save();
        return utils_1.RespondSuccess(req, res, 200, {}, "File Saved Successfully");
    }
    catch (err) {
        console.log('Error in Adding Query ', err);
        return utils_1.RespondError(req, res, 500, errorMsg_1.errorMsgs.INTERNAL_SERVER_ERROR, err.message);
    }
});
//# sourceMappingURL=fileUpload.js.map