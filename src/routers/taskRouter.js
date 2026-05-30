import express from 'express'
const router =express.Router();
import {deleteTask, getTask, updateTask, insertTask} from "../models/taskModels/taskSchema.js"



router.all("/", (req, res, next)=>{
    //code here 
    // res.json({
    //     status:"success",
    //     message:"todo list"
    // })
    next()
});

//databse table selecting




router.post ("/", async (req,res,next)=>{

    try {
        console.log(req.body,"--------")
//insert task
// const result = await insertTask(req.body);
console.log(req.body)

    res.json({
        message:"message from post",
        status:"new data added",
    })
    } catch (error) {
        console.log(error.message)
        res.json({
            message:"Error occured ",
            status: error.message,
        })
    }

})


router.get ("/", async (req,res,next)=>{
    const tasks = await getTask();
    res.json({
        message:"got data from server",
        status:"200 ok",
        tasks,
      
    })
})



router.patch ("/", async (req,res,next)=>{
    const {_id , ...rest} = req.body;
    console.log(req.body)
   const result = await updateTask(_id, rest);
    res.json({
        message:"message from put",
        status:"200 ok",
        result
    })
})
router.delete ("/:_id", async (req,res,next)=>{
const { _id } = req.params;
const result = await deleteTask(_id);
    res.json({
        message:"Your task has been deleted",
        status:"200 ok",
        result,
    })
})


export default router;