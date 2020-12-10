const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  }, 
  
  exercises: [{
    name: String,
    startTime: Date, // need to check it 
    duration: Number, // minites or hours
    intensity: Number
  }],

  sleep: [{
    starTime: Date, // need to check it 
    duration: Number, // minites or hours
    notes: String
  }],

  consumptions: [{
    startTime: Date,
    name: String,
    imgUrl: String,
      // here not sure
    ingredients: [{
      name: String,
      numberOfServings: Number,
      servingSize: String
  }]
}],
  
  symptoms: [{
    name: String,
    startTime: Date,
    duration: Number,
    intensity: Number,
    notes: String
  }],
  
  energy: {
    type: Number
  }
  
});


const Day = mongoose.model('Day', daySchema);
module.exports = Day;