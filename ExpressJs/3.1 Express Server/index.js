
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}.`);
// });
// const express = require('express')

import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})  
app.get("/about", (req ,res) =>{

  console.log("<h1>About</h1><p>This is my first port</p>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 