import express from 'express';
import cors from 'cors'
import HelloController
  from "./controllers/hello-controller.js"

import UserController
  from "./controllers/users/users-controller.js"

import TuitsController
  from "./controllers/tuits/tuits-controller.js";
import path  from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

//app.listen(process.env.PORT || 4000);


const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
TuitsController(app);
HelloController(app)
UserController(app)
const host = '0.0.0.0'
app.listen(process.env.PORT || 4000, host);
// test