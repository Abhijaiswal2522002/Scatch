const express=require('express');
const router=express.Router();

router.get("/",function(req,res){
    res.send("hi working")
})
module.exports=router;