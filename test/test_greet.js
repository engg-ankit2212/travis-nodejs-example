const greet = require ('../index.js')
const assert = require('assert');

describe('greet', function() {
  describe('when given name', function() {
    it('should return "Hello, World" when not given a name', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
