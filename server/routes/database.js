var express = require('express');
var router = express.Router();
var Hero = require('../models/heroes');
var Power = require('../models/superPowers');


//GET -- all superpowers from DB
router.get('/', function (req, res) {
  Power.find({}, function (err, superPowers) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (superPowers);
  });
});

//POST -- post heroes to the DB
router.post('/', function (req, res) {
  var hero = new Hero(req.body);
  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});


module.exports = router;
