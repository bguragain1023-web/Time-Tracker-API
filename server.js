import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 8000;

//connect mono db
import { connectMongoDB } from './src/config/dbConfig.js'
connectMongoDB();


app.use(morgan("combined"))
app.use(express.json());
app.use(cors())

//static serving 
import path from "path"
const _dirname = path.resolve();

//serve the stact file from the node
app.use(express.static(path.join(_dirname,"dist")))
app.get("/", (req,res)=>{
    res.sendFile(path.join(_dirname,"dist","index.html"))

})

import taskRouter from './src/routers/taskRouter.js'



app.use("/api/v1/tasks",taskRouter)


app.listen(PORT, (error) => {
    error 
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
    
})