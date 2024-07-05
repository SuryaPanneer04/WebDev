import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "surya",
  port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email =req.body.username;
  const password = req.body.password;
  try{
  const checkresult = await db.query("select * from users where email= $1",[email]);
  if(checkresult.rows.length>0){
    res.send("Email is already existed,try logged in.");
  }else{
   const result = await db.query(
   "insert into users (email,password)values($1,$2)",
   [email,password]
   );
 console.log(result);
 res.render("secrets.ejs");
  }
}catch(err){
  console.log(err);
}
});

app.post("/login", async (req, res) => {
  const email =req.body.username;
  const password = req.body.password;
  try{
  const result = await db.query("select * from users where email= $1",[email]);
  if(result.rows.length>0){
    const user = result.rows[0];
    const strongpassword = user.password;
    if(password===strongpassword){
      res.render("secrets.ejs");
    }else{
      res.send("Incorrect password");
    }
  }else{
    res.send("user not found");
  }
}catch(err){
  console.log(err);
}
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
