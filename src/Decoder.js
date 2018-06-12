'use strict';

function Decoder() {
  this.wordArray = []
}

Decoder.prototype.decode = function(string) {
  var helper = new DecoderHelper()
  var code = helper.morseCode()
  this.wordArray.push(code[string])
  return this.wordArray
};
