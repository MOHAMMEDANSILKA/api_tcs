const express=import('express');
const app=express();
app.get('/',(req,res)=>{
res.send("hellow world");
});
app.listen(3000,()=>console.log("listening on port 3000"))