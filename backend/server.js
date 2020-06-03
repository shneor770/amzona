import express from "express";
import data from "./data";


const app =express();


app.get("/api/products/:id", (req, res)=>{
    const productId = req.params.id;
    const pruduct = data.products.find(x =>x._id === productId);
    if(pruduct)
     res.send(pruduct);
    else
     res.status(404).send({mag: "product not found"});
})
app.get("/api/products", (req, res)=>{
    res.send(data.products)
})
     
app.listen(5000, ()=>{console.log("Server started at port 5000")})