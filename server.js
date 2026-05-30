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

import taskRouter from './src/routers/taskRouter.js'



app.use("/api/v1/tasks",taskRouter)


app.listen(PORT, (error) => {
    error 
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
    
})