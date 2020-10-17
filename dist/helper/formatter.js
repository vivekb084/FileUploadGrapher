"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeColStringToNumber = (ArrayData, colArray) => {
    return new Promise((resolve, reject) => {
        try {
            for (let i = 0; i < ArrayData.length; i++) {
                for (let element in ArrayData[i]) {
                    if (ArrayData[i][element] && colArray.includes(element)) {
                        ArrayData[i][element] = parseInt(ArrayData[i][element], 10);
                    }
                }
            }
            resolve(ArrayData);
        }
        catch (error) {
            reject(error);
        }
    });
};
//# sourceMappingURL=formatter.js.map