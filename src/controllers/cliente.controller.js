import Cliente from "../models/cliente.js"

export const obtenerCliente = async (req,res)=> {
  const clientes = await Cliente.find();
  return res.json(clientes)
} 

export const crearCliente = async (req, res)=>{
  const cliente = new Cliente(req.body)
  await cliente.save();
  return res.json({response:"todo bien mi krnal"});
}

export const buscarCliente = async (req,res)=>{
  const {id} = req.params;
  const cliente = await Cliente.findById(id);
  res.json(cliente);
}

export const editarCliente = async (req,res)=>{
  const {id} = req.params;
  const cliente = await Cliente.findOneAndUpdate({_id:id}, {$set: req.body}, {new: true});
  return res.json({response:"Mi krnal, todo se actualizó bien"});
}

export const eliminarCliente = (req,res)=>{
  const {id} = req.params;
  Cliente.findByIdAndDelete(id)
  .then(()=>res.json({response:`Mi krnal, acabas de eliminar el dato de ${id}`}))
  .catch((err)=>console.log(err))
}

/*
export const eliminarCliente = (req,res)=>{
  const {id} = req.params;
  Cliente.findByIdAndDelete(id)
  .then(()=>{
    const uno = 1 // aquí va si se encontró el dato o no 
    if(uno == 1){
      return res.json({response:`Mi krnal, acabas de eliminar el dato de ${id}`})
    }else{
      return res.json({response:"Mi krnal, esa sarna nuestá"})
    }
  })
  .catch((err)=>console.log(err))
}
*/









