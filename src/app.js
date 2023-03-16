import express from "express"
import morgan from "morgan"
import cors from "cors"
import {PORT} from "./config.js"

import ejemploRoutes from "./routes/ejemplo.routes.js"
import clientes from "./routes/cliente.routes.js"

// configuraciones 
const app = express();
app.set("port",PORT);
app.use(express.urlencoded({ extended: false }));


//middlewares
app.use(morgan("dev"));
app.use(cors());


//routes 
app.use(ejemploRoutes)
app.use(clientes);

// templates 


// exports
export default app; 