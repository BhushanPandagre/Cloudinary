const mongoose = require('mongoose');


mongoose.productSchema = mongoose.Schema({
  name:String,
  brand:String,
  price:Number,
  image:String
})

module.exports = mongoose.model('cloud', mongoose.productSchema)