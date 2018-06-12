'use strict';

function Decoder() {
  this.wordArray = []
}

Decoder.prototype.decode = function(string) {
  var strinsArray = string.split(' ')
  this._arrayIterator(strinsArray)
};

Decoder.prototype.makeString = function(array) {
  var resultString = array.join('')
  return resultString
}

Decoder.prototype._arrayIterator = function(array) {
  var i;
  var helper = new DecoderHelper()
  var code = helper.morseCode()
  for (i = 0; i < array.length; i++) {
    if (array[i] === '') {
      this.wordArray.push(' ');
      i += 1
    } else {
      this.wordArray.push(code[array[i]]);
    };
  };
  return this.wordArray
}
