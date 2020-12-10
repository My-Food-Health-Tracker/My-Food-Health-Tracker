const express = require('express');
const router  = express.Router();
const Project = require('../models/User');

/* GET home page */
router.get('/', (req, res, next) => {
  User.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;
