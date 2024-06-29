import express from "express";
import axios from "axios";

const app =express();
const port =3000;

app.get("/", async (req,res)=>{
    try{
     const result = await axios.get("https://secrets-api.appbrewery.com/random");
      res.render("index.ejs",{
        user:result.data.username,
        id:result.data.id,
      });
    }catch(error){
        console.log(error.response.data);
        req.status(500);
    }
});

app.listen(port,()=>{
  console.log(`Server running in this ${port}. `);
});

