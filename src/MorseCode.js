'use strict';

function DecoderHelper() {}

DecoderHelper.prototype.morseCode = function() {
  var morseCode = {}

  morseCode['.-'] = 'A'
  morseCode['-...'] = 'B'
  morseCode['-.-.'] = 'C'
  morseCode['-..'] = 'D'
  morseCode['.'] = 'E'
  morseCode['..-.'] = 'F'
  morseCode['--.'] = 'G'
  morseCode['....'] = 'H'
  morseCode['..'] = 'I'
  morseCode['.---'] = 'J'
  morseCode['-.-'] = 'K'
  morseCode['.-..'] = 'L'
  morseCode['--'] = 'M'
  morseCode['-.'] = 'N'
  morseCode['---'] = 'O'
  morseCode['.--.'] = 'P'
  morseCode['--.-'] = 'Q'
  morseCode['.-.'] = 'R'
  morseCode['...'] = 'S'
  morseCode['-'] = 'T'
  morseCode['..-'] = 'U'
  morseCode['...-'] = 'V'
  morseCode['.--'] = 'W'
  morseCode['-..-'] = 'X'
  morseCode['-.--'] = 'Y'
  morseCode['--..'] = 'Z'
  morseCode['...---...'] = 'SOS'
  morseCode[''] = ' '
  return morseCode
};
