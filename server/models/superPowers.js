var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PowerSchema = new Schema({
  power_name: { type: String, required: true},
});

var Power = mongoose.model('Per', PowerSchema);

module.exports = Power;
