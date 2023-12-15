const express = require('express');
const app = express();
const port = 3000;

const errorHandler = require('./middleware/errorHandler');
const connectDb=require("./config/dbConnection")
connectDb()

app.use(express.json());
const tirRoutes= require("./routers/tirRoutes")

app.use("/",tirRoutes)



app.use(errorHandler);


app.listen(port, () => console.log(`Tirlar Uygulaması ${port} portundan dinleniyor!`));