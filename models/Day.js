const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
  date: {
    type: Date,
    default: new Date()
  },

  owner: { type: Schema.Types.ObjectId, ref: 'User' },

  foods: [{
    startTime: Date,
    name: String,
    brand: String,
    ServingAmount: Number,
    ServingSize: String,
    imgUrl: String,
      // here not sure
    ingredients: []
  }],

  drinks: [{
    startTime: Date,
    name: String,
    imgUrl: String,
    brand: String,
    ServingAmount: Number,
    ServingSize: String,
      // here not sure
    ingredients: []
  }],

  supplements : [{
    startTime: Date,
    name: String,
    imgUrl: String,
    brand: String,
    ServingAmount: Number,
    ServingSize: String,
      // here not sure
    ingredients: []
  }],

  medications : [{
    startTime: Date,
    name: String,
    imgUrl: String,
    brand: String,
    ServingAmount: Number,
    ServingSize: String,
      // here not sure
    ingredients: []
  }],
  
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
  
  symptoms: [{
    name: String,
    startTime: Date,
    duration: Number,
    intensity: Number,
    notes: String
  }],
  
  energy: Number
  
});


const Day = mongoose.model('Day', daySchema);
module.exports = Day;