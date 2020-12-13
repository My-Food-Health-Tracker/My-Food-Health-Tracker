const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
  date: new Date(),
    
  owner: { type: Schema.Types.ObjectId, ref: 'User' },

  foods: [{
    startTime: new Date(),
    imgUrl: String,
    ServingAmount: Number,
    ServingSize: String,
      // ingredients are obejcts
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
  }],

  drinks: [{
    startTime: new Date(),
    name: String,
    imgUrl: String,
    brand: String,
    ServingAmount: Number,
    ServingSize: String,
      // here not sure
    ingredients: []
  }],

  supplements : [{
    startTime: new Date(),
    name: String,
    imgUrl: String,
    brand: String,
    ServingAmount: Number,
    ServingSize: String,
      // here not sure
    ingredients: []
  }],

  medications : [{
    startTime: new Date(),
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
    startTime: new Date(), // need to check it 
    duration: Number, // minites or hours
    intensity: Number
  }],

  sleep: [{
    starTime: new Date(), // need to check it 
    duration: Number, // minites or hours
    notes: String
  }],
  
  symptoms: [{
    name: String,
    startTime: new Date(),
    duration: Number,
    intensity: Number,
    notes: String
  }],
  
  energy: Number
  
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