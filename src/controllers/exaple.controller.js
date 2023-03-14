export const withHTML = (req, res) => {
  res.send('<h1>Ejemplo con datos HTML</h1>')
}

export const withJSON = (req, res)=>{
  res.json({ejemplo:"json"})
}