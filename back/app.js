const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors");

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")


app.use('/api', productos) // Sugeto a decision (ruta del navegador)


//MiddleWeres para manejar errores
app.use(errorMiddleware)




module.exports = app
