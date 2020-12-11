const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();

const Day = require('../models/Day');
const User = require('../models/User')

// get all the Days
router.get('/', (req, res, next) => {
  Day.find()
    .populate('owner')
    .then(days => {
      res.status(200).json(days);
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

  Day.findById(req.params.id)
    .populate('owner')
    .then(day => {
      if (!day) {
        console.log('no Day');
        res.status(404).json(day);
      } else {
        res.status(200).json(day);
      }
    })
    .catch(err => {
      res.json(err);
    })
});

// create a Day
router.post('/', (req, res) => {
  const { date, energy } = req.body;
  const owner = req.user._id;
  Day.create({
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
  })
    .then(day => {
      res.status(201).json(day);
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