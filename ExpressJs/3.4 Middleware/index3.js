import express from "express";

const app = express();
const port = 3000;
function logger(req,res,next){
  console.log("Request method : ", req.method);
  console.log("Request Url : ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("surya");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
