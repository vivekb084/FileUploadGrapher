"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_1 = require("../config/constants");
exports.GraphSchema = new mongoose_1.Schema({
    TransactionData: [
        {
            TransactionDate: {
                type: Date,
                required: true,
            },
            Product: {
                type: String,
                required: true,
            },
            Price: {
                type: Number,
                required: true,
            },
            Payment_Type: {
                type: String,
                required: true,
            },
            Name: {
                type: String,
                required: true,
            },
            City: {
                type: String,
                required: true,
            },
            State: {
                type: String,
                required: true,
            },
            Country: {
                type: String,
                required: true,
            },
            AccountCreated: {
                type: Date,
                required: true,
            },
            LastLogin: {
                type: Date,
                required: true,
            },
            Longitude: {
                type: String,
                required: true,
            },
            Latitude: {
                type: String,
                required: true,
            },
        }
    ]
}, { timestamps: true });
exports.Graph = mongoose_1.model(constants_1.schemaNames.GRAPH_DATA, exports.GraphSchema);
//# sourceMappingURL=fileUpload.js.map