var StringPatterns = require('../string-patterns');

function FiveStringPatterns(plugin) {
  this.tuning = plugin._super.params.tuning;
  if (!this.tuning) {
    this.tuning = ['C,', 'G,', 'D', 'A', 'e'];
  }
  plugin.tuning = this.tuning;
  this.strings = new StringPatterns(plugin);
}

FiveStringPatterns.prototype.notesToNumber = function (notes, graces) {
  var converter = this.strings;
  return converter.notesToNumber(notes, graces);
};

FiveStringPatterns.prototype.stringToPitch = function (stringNumber) {
  var converter = this.strings;
  return converter.stringToPitch(stringNumber);
};


module.exports = FiveStringPatterns;
