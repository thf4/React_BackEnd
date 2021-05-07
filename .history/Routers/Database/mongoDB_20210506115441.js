const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/celke",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

module.exports = mongoose;