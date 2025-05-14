var StringPatterns = require('./string-patterns');

function TabStringPatterns(plugin, defaultTuning, defaultStrOrder) {
  this.tuning = plugin._super.params.tuning;
  this.strOrder = plugin._super.params.strOrder;
  this.fretOffset = plugin._super.params.fretOffset;

  if (!this.tuning) {
    this.tuning = defaultTuning;
  }
  plugin.tuning = this.tuning;
  if (!this.strOrder) {
    if (!defaultStrOrder) {
      this.strOrder = [...Array(this.tuning.length).keys()];
    }
    else {
      this.strOrder = defaultStrOrder;
    }
  }
  if (!this.fretOffset) {
    this.fretOffset = new Array(this.tuning.length).fill(0);
  }
  plugin.strOrder = this.strOrder;
  plugin.fretOffset = this.fretOffset;
  this.strings = new StringPatterns(plugin);
}

TabStringPatterns.prototype.notesToNumber = function (notes, graces) {
  var converter = this.strings;
  return converter.notesToNumber(notes, graces);
};

TabStringPatterns.prototype.stringToPitch = function (stringNumber) {
  var converter = this.strings;
  return converter.stringToPitch(stringNumber);
};


module.exports = TabStringPatterns;

