const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
  date: {
    type: String
    //default: (new Date()).toISOString().split('T')[0]
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
    startTime: String, // need to check it 
    duration: Number, // minutes or hours
    intensityLevel: Number
  }],

  sleep: [{
    startTime: String, // need to check it 
    duration: Number, // minutes or hours
    notes: String
  }],
  
  symptoms: [{
    name: String,
    startTime: String,
    intensity: Number,
    notes: String
  }],
  
  energy: {
    startTime: String,
    energyLevel:Number
  }
},

{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  },
}

);


const Day = mongoose.model('Day', daySchema);
module.exports = Day;