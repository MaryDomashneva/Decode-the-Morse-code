'use strict';

describe('Decoder', function() {
  var decoder;

  beforeEach(function() {
    decoder = new Decoder();
  });

  it('has empty hash by default', function() {
    expect(decoder.wordArray).toEqual([]);
  });

  describe('#decode', function() {
    it('returns array of\
    letters', function() {
      var string = '.- -...  -.-.'
      decoder.decode(string);
      expect(decoder.wordArray).toEqual(['A', 'B', ' ', 'C']);
    });
  });

  describe('#makeString', function() {
    it('returns string\
    from array of letters', function() {
      var letters = ['A', 'B', ' ', 'C']
      decoder.makeString(letters);
      expect(  decoder.makeString(letters)).toEqual('AB C');
    });
  });
});
