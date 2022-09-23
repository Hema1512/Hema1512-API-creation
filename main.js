const express= require("express")
const app= express()

require("./db/dbConnection");
const monmodel=require("./models/schema");
app.use(express.json())


//POST 
app.post("/post",async(req,res)=>
{
    console.log("inside post")
    //const data=new monmodel({
        const data=new monmodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id,
        phno:req.body.phno,
        s1:req.body.s1,
        s2:req.body.s2,
        total:req.body.total,
        adress:req.body.adress
    })

    const val= await data.save()
    res.send(val)
})

// GET
app.get("/get/:id",async(req,res)=>
{
    fetchid=req.params.id;
    monmodel.find(({id:fetchid}),function(err,val){
        if(err)
        {
            res.send("error")
        }
        if(val.length==0)
        {
            res.send("data not present")
        }else{
            res.send(val);
        }
        
    })
})




//FETCHING ALL THE DATA IN MONGO

app.get("/findall",(req,res)=>
{
    monmodel.find((err,val)=>
    {
        if(err)
        {
            console.log(err)
        }else{
            res.json(val)
        }

    })
})




//PUT/// UPDATE
app.put("/put/:id",async(req,res)=>
{
    let upid=req.params.id
    let upname=req.body.name
    let upemail=req.body.email
    let uphno=req.body.phno
    let us1=req.body.s1
    let us2=req.body.s2
    let utotal=req.body.total
    let uadress=req.body.adress

    monmodel.findOneAndUpdate({id:upid},{$set:{name:upname,email:upemail,phno:uphno,s1:us1,s2:us2,total:utotal,adress:uadress}},{new:true},(err,data)=>
    {
        if(err)
        {
            console.log("err")
        }else{

            if(data==null)
            {
                res.send("no such details")
            }else{
                res.send(data)
        }
        }
        
    })
})


//DELETE

app.delete("/delete/:id",async(req,res)=>
{
    let deleteid= req.params.id
    monmodel.findOneAndDelete(({id:deleteid}),function(err,val)
    {
        if(err)
        {
            res.send("err")
        }else{
            if(val==null)
            {
                res.send("there is no such data to delete")
            }else{
                res.send(val)
            }
        }
    })
})
app.listen(3000,()=>
{
    console.log("running over 3000")
})


// get from name

// app.get("/getname/:name",async(req,res)=>
// {
//     fetchname=req.params.name;
//     monmodel.find(({name:fetchname}),function(err,val){
//         if(err)
//         {
//             res.send("error")
//         }
//         if(val.length==0)
//         {
//             res.send("data not present")
//         }else{
//             res.send(val);
//         }
        
//     })
// })
   
