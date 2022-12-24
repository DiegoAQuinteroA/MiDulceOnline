const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req,res) => {
    const { email, password } = req.body;
    try{

        //Verificamos si el usuario ya existe
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ msg: "El usuario ya existe" });
          }
         // creamos nuestro Usuario
         usuario = new Usuario(req.body);
         await usuario.save();
         res.send(usuario);



}catch (error) {
    console.log(error);
    res.status(500).send("hay un error al recibir los datos");
}
}

exports.mostrarUsuarios =async (req,res) =>{

try{
   const usuarios = await Usuario.find();
  res.json(usuarios)

} catch (error){
    console.log(error)
    res.status(500).send("hay un error al recibir los datos");
}
}

exports.obtenerUsuario = async (req,res) =>{
 try{
let usuario = await Usuario.findById(req.params.id);
if (!usuario){
    res.status(404).json({msg: 'el Usuario no existe'})
}
res.json(usuario);

 }catch (error){
    console.log(error)
    res.status(500).send("hay un error al recibir los datos");

}
}

exports.eliminarUsuario = async (req,res) =>{
    try{
        let usuario = await Usuario.findById(req.params.id);
        if (!usuario){
            res.status(404).json({msg: 'el Usuario no existe'})
        }
        await usuario.findByIdAndRemove({ _id: req.params.id})
        res.json({msg: 'Usuario eliminado con exito'});
}catch (error){
    console.log(error)
    res.status(500).send("hay un error al recibir los datos");

}
}

exports.actualizarUsuario = async (req,res) =>{
    try{
     const {nombre, email, password} = req.body;
     let usuario = await Usuario.findById(req.params.id); 
     if (!usuario){
        res.status(404).json({msg: 'el Usuario no existe'})
    }
    Usuario.nombre = nombre;
    Usuario.email = email;
    Usuario.password = password;


    usuario = await Usuario.findOneAndUpdate({_id: req.params.id}, usuario, {new:true})
    res.json(usuario);

    }catch (error){
    console.log(error)
    res.status(500).send("hay un error al recibir los datos");
}
}
