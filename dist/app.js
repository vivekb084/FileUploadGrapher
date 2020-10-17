"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const bodyParser = __importStar(require("body-parser"));
const routes_1 = require("./routes");
const mongoose_1 = require("mongoose");
const envVariable_1 = require("./config/constants/envVariable");
const path = require("path");
class App {
    constructor() {
        this.app = express_1.default();
        this.app.use(helmet_1.default());
        this.config();
        this.mountRoutes();
        // View Engine Setup 
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
    }
    config() {
        // DB connection
        mongoose_1.connect(envVariable_1.EnvVar.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
        // enabling cors
        this.app.use(cors_1.default());
        // support application/json type post data
        this.app.use(bodyParser.json());
    }
    mountRoutes() {
        this.app.use(routes_1.router);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map