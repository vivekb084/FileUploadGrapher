import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';
import { router } from './routes'
import { connect } from 'mongoose'
import { EnvVar } from './config/constants/envVariable';
import { Multer } from 'multer'
import path = require("path")

class App {

    public app: express.Application

    constructor() {
        this.app = express()
        this.app.use(helmet())
        this.config()
        this.mountRoutes()
        // View Engine Setup 
        this.app.set("views", path.join(__dirname, "views"))
        this.app.set("view engine", "ejs")
    }

    private config(): void {
        // DB connection
        connect(EnvVar.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        // enabling cors
        this.app.use(cors())
        // support application/json type post data
        this.app.use(bodyParser.json())
    }

    private mountRoutes(): void {
        this.app.use(router)
    }
}

export default new App().app
