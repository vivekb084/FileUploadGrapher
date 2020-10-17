"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
exports.formatCSV = (csvPath) => {
    return new Promise((resolve, reject) => {
        try {
            const results = [];
            fs.createReadStream(csvPath)
                .pipe(csv_parser_1.default())
                .on('data', (data) => results.push(data))
                .on('end', () => {
                resolve(results);
            });
        }
        catch (error) {
            reject(error);
        }
    });
};
//# sourceMappingURL=csvDataExtractor.js.map