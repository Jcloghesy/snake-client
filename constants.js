/** ******** MAIN FILE to Hold All CONSTANTS - `constants.js` ********
 * 
 *   - module to hold connection and move command constants used in project 
 */

/** Assigns variables to hold connection information  */
const IP = "localhost";
const PORT = 50541;

/** **** Implements `keyboardInputs` Object ****
 *  - object maps keyboard inputs to corresponding server commands
 *  - server commands implemented are four movements and two canned messages
 */
const keyboardInputs = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  v: "Say: It is 'V' for Victory!!",
  x: "Say: You all going to end up ded, so might as well quit now!!"
};

/** Export the `IP`, `PORT` and `keyboardInputs` variables as a single object */
module.exports = {
  IP,
  PORT,
  keyboardInputs,
};

