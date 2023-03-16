import {Router} from "express"
import {conHTML,conJSON} from "../controllers/ejemplo.controller.js"

const router = Router()



router.get('/html',(req,res)=>
  res.send('<h1>Ejemplo con datos HTML</h1>')
);

router.get('/json',(req,res)=>{
  res.json({ejemplo:"json"});
});

router.get('/controller/html',conHTML);

router.get('/controller/json',conJSON);

export default router;
