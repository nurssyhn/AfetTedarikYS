const express = require('express');
const app = express();
const port = 3000;

const errorHandler = require('./middleware/errorHandler');
const connectDb=require("./config/dbConnection")
connectDb()

app.use(express.json());
const tirRoutes= require("./routers/tirRoutes")
const isteklerRoutes= require("./routers/istekRoutes")
const soforlerRoutes= require("./routers/soforRoutes")

app.use("/tir",tirRoutes)
app.use("/istek",isteklerRoutes)
app.use("/soforler",soforlerRoutes)



app.use(errorHandler);


app.listen(port, () => console.log(`Tirlar Uygulaması ${port} portundan dinleniyor!`));