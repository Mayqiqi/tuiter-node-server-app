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

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);
// test