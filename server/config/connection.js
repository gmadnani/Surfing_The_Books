const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;
