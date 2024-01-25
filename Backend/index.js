const express = require("express");
const db = require("./models/dbs");
const cors = require("cors")
const app = express();

// database connection => 
db.MongoConnnect();

// middlewares =>
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());


// Register  =>
app.post("/register", async (req, res) => {
  await db.Register.create(req.body);
  console.log(req.body)
})


// Login =>
app.post("/login", async (req, res) => {
  try {

    let { email, password } = req.body;
    let data = await db.Register.findOne({ email: email });

    if (data) {
      if (data.password === password) {
        let response = {
          massage: `Hello ${data.name} 😎 Coder , You LoggedIn successfully..!!`
        }
        res.json(response);
      } else {
        let response = {
          massage: `wrong password 😥`
        }
        res.json(response);
      }
    } else {
      console.log("data doesnot exits")
    }

  } catch (error) {
    console.log(error)
  }
})
// port =>
app.listen(8080, () => {
  console.log("Server is live on -> ", 8080);
});