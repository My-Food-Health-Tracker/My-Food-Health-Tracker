const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
  date: String,
    
  owner: { type: Schema.Types.ObjectId, ref: 'User' },

  foods: [{
    startTime: String,
    name: String,
    imgUrl: String,
    portion: Number, 
    eatenPortion: Number, 
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
  }],

  drinks: [{
    startTime: String,
    name: String,
    imgUrl: String,
    brand: String,
    servingAmount: Number,
    servingSize: String,
      // here not sure
    ingredients: []
  }],

  supplements : [{
    startTime: String,
    name: String,
    imgUrl: String,
    brand: String,
    servingAmount: Number,
    servingSize: String,
      // here not sure
    ingredients: []
  }],

  medications : [{
    startTime: String,
    name: String,
    imgUrl: String,
    brand: String,
    servingAmount: Number,
    servingSize: String,
      // here not sure
    ingredients: []
  }],
  
  exercises: [{
    name: String,
    startTime: String,
    duration: Number, // minites or hours
    intensity: Number
  }],

  sleep: [{
    starTime: String,
    duration: Number, // minites or hours
    notes: String
  }],
  
  symptoms: [{
    name: String,
    startTime: String,
    duration: Number,
    intensity: Number,
    notes: String
  }],
  
  energy: {
    startTime: String,
    energyLevel: Number
  }
},

{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
}
);


const Day = mongoose.model('Day', daySchema);
module.exports = Day;