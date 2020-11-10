var assert = require('assert');
const helper = require('../Math');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });

    it('should return 1 when the value is 2', function() {
        assert.strictEqual([1, 2, 3].indexOf(2), 1);
      });
  });
});

describe('Helper', function() {
    describe('#sum()', function() {
      it('should return 3 when sum 1 + 2', function() {
        assert.strictEqual(helper.sum(1, 2), 3);
      });
    });
    describe('#subtract()', function() {
      it('should return 1 when subtract 2 - 1', function() {
        assert.strictEqual(helper.subtract(2, 1), 1);
      });
    });
    describe('#multiply()', function() {
      it('should return 6 when multiply 2 * 3', function() {
        assert.strictEqual(helper.multiply(2, 3), 6);
      });
    });
    describe('#divide()', function() {
      it('should return 3 when divide 6 / 2', function() {
        assert.strictEqual(helper.divide(6, 2), 3);
      });
    });
    describe('#divide()', function() {
      it('should throw exception when divide any number by 0', function() {
        assert.throws(() => { helper.divide(6, 0); }, Error);
      });
    });
  });