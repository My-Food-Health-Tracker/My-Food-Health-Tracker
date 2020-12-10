const express = require('express');
const router  = express.Router();
const User = require('../models/User');

/* GET home page */
router.get('/', (req, res, next) => {
  console.log('Request accepted')
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;
