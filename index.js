const express=require("express");
const app =express();
app.set("view engine","ejs");
app.use(express.json());
const PORT =3000;



const errorMiddleware=(err,req,res,next)=>{
    next(err.message)
}
app.use(errorMiddleware)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});