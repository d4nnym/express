import {connect} from "mongoose"
import {MONGODB_URI} from "./config.js"

(async ()=>{
  try {
    const dataBase = await connect(MONGODB_URI);
    console.log("Base de datos conectada a ", dataBase.connection.name);
    
  } catch (err) {
    console.error(err);
  }
})(); 


/*
import mongoose from "mongoose"

mongoose
  .connect(MONGODB_URI)
  .then(()=>console.log("Base de datos conectada a", mongoose.connection.name))

*/
