'use strict';

describe("Decoder", function() {
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
      var a = '.-'
      decoder.decode(a);
      expect(decoder.wordArray).toEqual(['A']);
    });
  });
});
