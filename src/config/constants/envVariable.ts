import * as dotenv from "dotenv";

dotenv.config();

export const EnvVar = {
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/fileuploadgrapher',
}