import express from "express";

const app = express();

const port = 3000;

app.get("/", (req ,res) =>{

    res.send("<h1>Hello Surya</h1>");
});

app.get("/about", (req ,res) =>{

  res.send("<h1>About</h1><p>This is my first port</p>");
});
app.get("/contact", (req ,res) =>{

  res.send("<h1>Contact me</h1><p>00000000000</p>");
});
app.listen(port , () =>{
     console.log(`Server started on port ${port}.`);
});

