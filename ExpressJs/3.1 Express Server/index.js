import express from "express";
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}.`);
// });
// const express = require('express')
const app = express()
const router = app.router

router.get('/', (_req, res) => {
  res.send('hello world')
})

app.listen(3000);
