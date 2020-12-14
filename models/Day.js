const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
  date: String,
    
  owner: { type: Schema.Types.ObjectId, ref: 'User' },

  foods: [{
    name: String,
    startTime: String,
    imgUrl: String,
    yieldsPortion: Number, // 8
    eatenPortion: Number, // 2
    
      // ingredients are obejcts
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
    // 500g chicken, 60g bean, 79g rice
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