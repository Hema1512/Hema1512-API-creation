const mongoose=require("mongoose");
const sch={
    name:String,
    email:String,
    id:Number,
    phno:Number,
    s1:Number,
    s2:Number,
    total:Number,
    adress:String
    
}
const monmodel=mongoose.model("students",sch)
module.exports=monmodel;
