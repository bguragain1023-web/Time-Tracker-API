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

router.post ("/",(req,res,next)=>{

    res.json({
        message:"message from post",
        status:"200 ok"
    })
})
router.get ("/",(req,res,next)=>{

    res.json({
        message:"message from get",
        status:"200 ok"
    })
})
router.put ("/",(req,res,next)=>{

    res.json({
        message:"message from put",
        status:"200 ok"
    })
})
router.delete ("/",(req,res,next)=>{

    res.json({
        message:"message from delete",
        status:"200 ok"
    })
})


export default router;