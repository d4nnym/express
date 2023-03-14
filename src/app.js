import express from "express"
import morgan from "morgan"
import cors from "cors"
import {PORT} from "./config.js"

import exapleRoutes from "./routes/exaple.routes.js"

// config 
const app = express();
app.set("port",PORT);
app.use(express.json()); // Metodos POST y PUT  || app.use(express.urlencoded({ extended: false }))


//middlewares
app.use(morgan("dev"));
app.use(cors());



//routes 
app.use(exapleRoutes)

// templates 




// exports
export default app; 