import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

let userBase = [];

app.post("/signup", (req, res) => {
  let body = req.body;

  if (!body.firstName || !body.lastName || !body.email || !body.password) {
    res.status.send(`requires field is missing:
      {
        "firstname":"raj",
        "laastname":"john",
        "eamil":"acb@abc.com",
        "password":"123"
      }`);

    return;
  }

  console.log(req.body);
  let newUser = {
    userId: nanoid(),
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
  };

  userBase.push(newUser);
  res.status(201).send("user is cteated");
});

app.post("/login", (req, res) => {
  let body = req.body;

  if (!body.email || !body.password) {
    res.status.send(`requires field is missing:
     {
       "eamil":"acb@abc.com",
       "password":"123"
     }`);

    return;
  }

  let isFound = false;

  for (let i = 0; i < userBase.length; i++) {
    if (userBase[i].email === body.email) {
      isFound = true;

      if (userBase[i].password === body.password) {
        res.send({
          firstName: userBase[i].firstName,
          lastName: userBase[i].lastName,
          email: userBase[i].email,
          message: "login successful",
        });
        return;
      } else {
        // password invalid

        res.status(202).send({
          message: "incorrect password",
        });
        return;
      }
    }
  }

  if (!isFound) {
    res.send({
      message: "user is not found",
    });
  }
});

app.listen(port, () => {
  console.log(`this  runnning in my laptop listening on port ${port}`);
});

console.log("hello this is running in pc", new Date());

// // http://localhost:3000/profile
// app.get("/weather", (req, res) => {
//   res.send({
//     city: "karachi",
//     temp: 22,
//     wind: 4,
//   });
//   console.log("this is in my server point ", new Date());
// });
// app.get("/profile", (req, res) => {
//   res.send(
//     "this is a profile part ! this will be send to front part " + new Date()
//   );
//   console.log("this is profiel part ", new Date());
// });

// function randomNumber(){
//   return Math.floor(Math.random()*1000000)
// }

// app.post("/user",(req,res) =>{
//   console.log(req.body);

//   let newUser ={
//     id:randomNumber,
//     fullname:req.body.fullname,
//     username:req.body.username,
//     password:req.body.password
//   }

//   user.push(newUser);
//   res.status(201).send("user is created");

// })

// app.get("/user/:userid",(req,res)=>{  // get a single user

//   let userid =req.params.userid;
//   let isFound =false;

//   for(let i= 0;i<user.length;i++){
//     if(user[i].userid ==userid){
//       res.send(user[i]);
//       isFound =true;
//       break
//     }
//   }

//   if(!isFound){
//     res.status(204).send("user is not found");
//   }

// })
