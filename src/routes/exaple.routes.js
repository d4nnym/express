import {Router} from "express"
import {withHTML,withJSON} from "../controllers/exaple.controller.js"

const router = Router()

router.get('/html',(req,res)=>
  res.send('<h1>Ejemplo con datos HTML</h1>')
);

router.get('/json',(req,res)=>{
  res.json({ejemplo:"json"});
});

router.get('/controller/html',withHTML);

router.get('/controller/json',withJSON);


export default router;
