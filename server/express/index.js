require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var cors = require('cors')

const User = require("./model/user");
const auth = require("./middleware/auth");

const app = express();

app.use(cors())
app.use(express.json());


app.post("/register", async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;
    console.log(email,password)

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.post("/report",async(req,res) =>{
  var exist_day = false
 const {userEmail,
dayId,
exercicio,
dorCabeca,
codar,
acordar,
sleepTime,
jogar,
role,
agua,
refeicoes,
limpeza,
leitura} = req.body
  const obj = {}
  obj[dayId] = {
    "exercicio":exercicio,
    "dorCabeca":dorCabeca,
    "codar":codar,
    "acordar":acordar,
    "sleepTime":sleepTime,
    "jogar":jogar,
    "role":role,
    "agua":agua,
    "refeicoes":refeicoes,
    "limpeza":limpeza,
    "leitura":leitura

  }

  var userDayCheck = await User.findOne({email:userEmail})
  userDayCheck.report?.map(i=>{
    console.log(i[dayId] ? exist_day=true : "" )
  })
  if (exist_day === false){
  const user = await User.findOneAndUpdate(
    { email: userEmail },
    { $push: {"report":obj} } 
  );
  res.status(200).send(user)
  }
  else{
    res.status(200).send("já tem mano")
  }
})


app.get("/reports/:email", async(req, res) => {
  
  const {email} = req.params
  const user = await User.findOne({email:email})
  console.log(user)
  res.status(200).send(user);
});


app.listen(3333, function () {
  console.log('Listening on port 3333...')
})
