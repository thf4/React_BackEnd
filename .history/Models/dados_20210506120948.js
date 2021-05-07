const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/celke",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const UserSchema = new mongoose.Schema({
    name:{
      type: String,
      required:true,
    },
    email:{
      type: String,
      required:true
    },
    password:{
      type: String,
      requried: true
    },
    date:{
      type: Date,
      default: Date.now()
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;