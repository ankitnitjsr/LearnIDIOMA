const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  email: {
    type: String,
    
  },
  password: {
    type: String,
  
  },
  role: {
    type: String,
  
    enum: ['student', 'teacher'],
    default: 'student'
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const User = mongoose.model("user", userSchema);

module.exports = User;
