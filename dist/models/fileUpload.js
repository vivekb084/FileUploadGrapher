"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_1 = require("../config/constants");
exports.GraphSchema = new mongoose_1.Schema({
    TransactionData: [
        {
            Transaction_date: {
                type: Date,
                trim: true
            },
            Product: {
                type: String,
                trim: true
            },
            Price: {
                type: Number,
                trim: true
            },
            Payment_Type: {
                type: String,
                trim: true
            },
            Name: {
                type: String,
                trim: true
            },
            City: {
                type: String,
                trim: true
            },
            State: {
                type: String,
                trim: true
            },
            Country: {
                type: String,
                trim: true
            },
            Account_Created: {
                type: Date,
                trim: true
            },
            Last_Login: {
                type: Date,
                required: true,
                trim: true
            },
            Latitude: {
                type: String,
                trim: true
            },
            Longitude: {
                type: String,
                trim: true
            },
        }
    ]
}, { timestamps: true });
exports.Graph = mongoose_1.model(constants_1.schemaNames.GRAPH_DATA, exports.GraphSchema);
//# sourceMappingURL=fileUpload.js.map