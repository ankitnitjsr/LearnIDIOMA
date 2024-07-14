
const User = require("../models/user");
const { setUser } = require("../service/auth");
const Course = require('../models/course'); 
async function handleUserSignup(req, res) {
  const { name, email, password,role } = req.body;
  await User.create({
    name,
    email,
    role,
    password,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const courses = await Course.find({});
  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });
  
  if (user.password == password){
      const token = setUser(user);
      // localStorage.setItem('token',token);
     return res.render("home",{
      courses:courses
     });
  }
  return res.render("home",{
    courses:courses
  });
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
