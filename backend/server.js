import app from './app.js';
import dotenv from 'dotenv';
import { connectMongoDatabase } from './config/db.js';
dotenv.config({path:'backend/config/config.env'})
connectMongoDatabase();
//Handle uncaught exception errors
process.on(`uncaughtException`,(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Server is shutting down due to uncaught exception error`);
    process.exit(1);
})
const port = process.env.PORT || 3000;

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running on PORT: ${port}`);
})
// console.log(myName);
process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Server is Shutting down, due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    })

})

//Mongo db error