const app = require ("./app");
const connectDadabase = require("./config/database");

//Setear el archivo de configuracion
const dotenv=require("dotenv");

dotenv.config({path:'back/config/config.env'})

//Configuracion base de datos
connectDadabase();

//Llamemos al server
const server=app.listen(process.env.PORT, () =>{
    console.log(`Servidor iniciando en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)

})
