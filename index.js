/**
 * Greet someone according to the given name.
 *
 * @param  {String} name
 * @return {String}
 */
module.exports = {
  greet: function(name="World") {
    return String(`Hello, ${name}!`);
  }
};
