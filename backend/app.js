//const express= require ('express');
import express from 'express';
import product from './routes/productRoutes.js';
const app = express();

//Middleware will pass the incoming request with jason payload 
app.use(express.json())

//module.exports= app;
app.use("/api/v1/", product)
export default app;