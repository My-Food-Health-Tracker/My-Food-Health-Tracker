const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();

const Day = require('../models/Day');
const User = require('../models/User');
const Ingredient = require('../models/Ingredient');

// get all the Ingredients
router.get('/', (req, res, next) => {
  Ingredient.find()
    .populate('owner')
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.json(err);
    })
});

// Xiaomei: for add a ingredient
// to check if id is a valid mongo object id: mongoose.Types.ObjectId.isValid(_id)
router.get('/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Ingredient.findById(req.params.id)
    .populate('owner')
    .then(ingredient => {
      if (!ingredient) {
        console.log('no Ingredient');
        res.status(404).json(ingredient);
      } else {
        res.status(200).json(ingredient);
      }
    })
    .catch(err => {
      res.json(err);
    })
});

// LoggedIn user want to create a Ingredient
router.post('/user/:id/day/:date', (req, res) => {
  const { date, startTime, name, brand, category, servingAmount, servingSize, portion, eatenPortion } = req.body;
  // const owner = req.user._id;
  // Check if the user already has a day
  
console.log('this is req.params.id', req.params)
 Day.findOne({$and: [{owner: req.params.id}, {date: req.params.date}]})
  .then (day => {
    console.log('this is the day', day)
    if(day !== null) {
      Ingredient.create({
        name,
        brand,
        category,
        servingAmount,
        servingSize,
        owner: req.params.id
      })
      .then(dbIngredient => {
        console.log('this is the dbingredient', dbIngredient)
        Day.findByIdAndUpdate(day._id,
          { $push: {"foods": 
            {startTime,
            name,
            portion,
            eatenPortion,
            imgUrl: "",
            ingredients: dbIngredient
        }}}, {new: true}).then(dbIngredient => {
          res.status(201).json(dbIngredient);
        })
        .catch(err => {
          res.json(err);
        })
      })
    } else {
      Ingredient.create({
        name,
        brand,
        category,
        servingAmount,
        servingSize,
        owner: req.params.id
      })
        .then((dbIngredient) => {
          Day.create({
            date: date,
            owner: req.params.id,
            foods: [{
              startTime: startTime,
              imgUrl: "",
              name,
              portion,
              eatenPortion,
                // ingredients are obejcts
              ingredients: [dbIngredient]
            }],
            drinks:[],
            supplements: [],
            medications: [],
            exercises: [],
            sleep:[],
            symptoms: [],
            energy: ""
          })
          .then((dbDay) => {
            User.findByIdAndUpdate(req.params.id, {
              $push: { days: dbDay._id },
            })
          })
        })
        .then(dbIngredient => {
          res.status(201).json(dbIngredient);
        })
        .catch(err => {
          res.json(err);
        })
    }

  })

  
  // let hasThisDay = false;
  // for(let i=0; i< req.user.days.length; i++) {
  // Day.findById(req.user.days[i]).populate('date')
  // .then(dbDay => {
  //   console.log(dbDay.date)
  // }
    
  // )
  //   console.log(dbDate);
  //   if(req.user.days[i].date === date) {
  //     hasThisDay = true;
  //     const dayId = req.user.days[i]._id;
  //     break; 
  //   }
  // }


})

// update a Ingredient
router.put('/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const { name, brand , category } = req.body;
  const owner = req.user._id;
  Day.findByIdAndUpdate(req.params.id,{ 
    name,
    brand,
    category,
    owner 
  },
    { new: true }
  )
    .then(ingredient => {
      console.log(ingredient);
      res.status(200).json(ingredient);
    })
    .catch(err => {

    })
});

router.delete('/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  
  Ingredient.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'ok' })
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;