import {Router} from "express"
import {obtenerCliente,crearCliente,buscarCliente,editarCliente,eliminarCliente} from "../controllers/cliente.controller.js"

const router = Router()

router.get("/cliente",obtenerCliente);
router.post("/cliente",crearCliente);
router.get("/cliente/:id",buscarCliente);
router.put("/cliente/:id",editarCliente);
router.delete("/cliente/:id",eliminarCliente);

export default router;


