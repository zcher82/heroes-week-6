var express = require('express');
var router = express.Router();
var Hero = require('../models/heroes');

//GET -- heroes from DB and display on DOM
router.get('/', function (req, res) {
  Hero.find({}, function (err, heroes) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (heroes);
  });
});

//DELETE -- favorite pets from the DOM
router.delete('/:id', function (req, res) {
  console.log(req.params.id);
  Hero.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.sendStatus(204);
  });
});

module.exports = router;
