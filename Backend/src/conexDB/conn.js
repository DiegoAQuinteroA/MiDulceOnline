const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://groverush:grovedb1234@groverush.2uh5ab1.mongodb.net/midulceonline");

const miconexion = mongoose.connection;
miconexion.on("connected", () => {
    console.log("Conexion exitosa a la base de datos MongoDB!!!");
});
miconexion.on("error", () => {
    console.log("Hay un error en la conexion a MongoDB!!!");
});
module.exports = mongoose;
