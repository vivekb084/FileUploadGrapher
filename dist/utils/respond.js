"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespondError = (req, res, status, errorType, message) => {
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'appliation/json',
    });
    res.status(status);
    res.json({
        error_type: errorType,
        message,
        status,
    });
};
exports.RespondSuccess = (req, res, status, payload, message = '') => {
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'appliation/json',
    });
    res.status(status);
    res.json({
        data: payload,
        message,
        status,
    });
};
//# sourceMappingURL=respond.js.map