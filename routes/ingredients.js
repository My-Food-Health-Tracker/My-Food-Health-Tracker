const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();

const Day = require('../models/Day');
const User = require('../models/User');
const Ingredient = require('../models/Ingredient');

// get all the Days
router.get('/', (req, res, next) => {
  console.log('Requesting data from server')
  Ingredient.find()
    .populate('owner')
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.json(err);
    })
});

// get a specfic Day
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

// create a Ingredient
router.post('/', (req, res) => {
  const { name, brand , category } = req.body;
  const owner = req.user._id;
  // get the current date from the TimeForm

  const currentDate = ??
  console.log(req.body)
  Ingredient.create({
    name,
    brand,
    category,
    owner
  })
    .then((dbIngredient) => {
      // find the day by the date
      // date = currentDate
      return Day.findOneAndUpdate(, {
        $push: { "foods.$[].ingredients": dbIngredient._id },
      });
    })
    .then(dbIngredient => {
      res.status(201).json(dbIngredient);
    })
    .catch(err => {
      res.json(err);
    })
})

// update a Day
router.put('/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const { date, energy } = req.body;
  const owner = req.user._id;
  Day.findByIdAndUpdate(req.params.id,{ 
    date,
    foods: [],
    drinks: [],
    supplements: [],
    medications: [],
    exercises: [],
    sleep: [],
    symptoms: [],
    energy,
    owner 
  },
    { new: true }
  )
    .then(day => {
      console.log(day);
      res.status(200).json(day);
    })
    .catch(err => {

    })
});

router.delete('/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  
  Day.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'ok' })
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;