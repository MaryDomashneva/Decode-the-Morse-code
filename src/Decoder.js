'use strict';

function Decoder() {
  this.wordArray = []
}

Decoder.prototype.decode = function(string) {
  var helper = new DecoderHelper()
  var strinsArray = string.split(' ')
  var code = helper.morseCode()
  var i;
  for (i = 0; i < strinsArray.length; i++) {
    this.wordArray.push(code[strinsArray[i]]);

  };
  return this.wordArray
};

Decoder.prototype.makeString = function(array) {
  var resultString = array.join('')
  return resultString
}
