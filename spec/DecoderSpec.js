'use strict';

describe("Decoder", function() {
  var decoder;

  beforeEach(function() {
    decoder = new Decoder();
  });

  it('has empty hash by default', function() {
    expect(decoder.wordArray).toEqual([]);
  });
});
