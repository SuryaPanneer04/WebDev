
import express from "express";

const app = express();
const port =3000;

app.get("/", (req,res) =>{

    const data = {
        title: "Bio-Data",
        // name : "surya",
        // age : "21",
        // dob : "22/06/2004",
        // qulification : "ug",
    };
    res.render("index.ejs",data);
});

app.listen(port ,() =>{
    console.log(`server running in this ${port}. `);
})