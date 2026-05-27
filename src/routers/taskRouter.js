import express from 'express'
const router =express.Router();

import mongoose from 'mongoose';


router.all("/", (req, res, next)=>{
    //code here 
    // res.json({
    //     status:"success",
    //     message:"todo list"
    // })
    next()
});

//databse table selecting

const taskSchema = new mongoose.Schema({},{strict:false});
const TaskCollection = mongoose.model("Task", taskSchema);


router.post ("/", async (req,res,next)=>{
console.log(req.body,"--------")
//insert task
const result = await TaskCollection(req.body).save();
console.log(result)

    res.json({
        message:"message from post",
        status:"new data added"
    })
})


router.get ("/", async (req,res,next)=>{
    const tasks = await TaskCollection.find();
    res.json({
        message:"got data from server",
        status:"200 ok",
        tasks,
      
    })
})



router.patch ("/", async (req,res,next)=>{
    const {_id , ...rest} = req.body;
    console.log(req.body)
   const result = await TaskCollection.findByIdAndUpdate(_id, rest)
    res.json({
        message:"message from put",
        status:"200 ok",
        result
    })
})
router.delete ("/:_id", async (req,res,next)=>{
const { _id }= req.params;
const result = await TaskCollection.findByIdAndDelete(_id)
    res.json({
        message:"Your task has been deleted",
        status:"200 ok",
        result,
    })
})


export default router;