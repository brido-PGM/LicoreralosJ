const mongoose = require('mongoose');
require('dotenv').config();

const URI= `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@adso2903013.7jhin.mongodb.net/${process.env.BD}`

mongoose.connect(URI)

module.exports = mongoose;
