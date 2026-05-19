import express from 'express'
const router =express.Router();


router.all("/", (req, res, next)=>{
    //code here 
    // res.json({
    //     status:"success",
    //     message:"todo list"
    // })
    next()
});


let fakeDB = [{ id: 1, task: 'coding', hr: 40, type: 'entry' },
  { id: 2, task: 'gaming', hr: 40, type: 'entry' },
  { id: 3, task: 'cooking', hr: 40, type: 'entry' }];

router.post ("/",(req,res,next)=>{
fakeDB.push(req.body);
console.log(fakeDB);
    res.json({
        message:"message from post",
        status:"new data added"
    })
})
router.get ("/",(req,res,next)=>{

    res.json({
        message:"got data from server",
        status:"200 ok",
        tasks: fakeDB
    })
})
router.patch ("/",(req,res,next)=>{
    const {id , type} = req.body;

    fakeDB = fakeDB.map((item) =>{
        if(item.id == id){
            item.type =type
        return item;
        }
        return item;
        

    })


    res.json({
        message:"message from put",
        status:"200 ok"
    })
})
router.delete ("/:id",(req,res,next)=>{
const {id }= req.params;
fakeDB = fakeDB.filter((item) => item.id !== +id);
    res.json({
        message:"Your task has been deleted",
        status:"200 ok"
    })
})


export default router;