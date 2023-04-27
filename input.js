/** ******** MAIN USER INTERFACE - INPUT FILE - `input.js` ********
 *
 *  - `input.js`  - a separate module for all user inputs
 */

/** ******** Implements User Interface Functions ********
 *   - Implements initial steps in User interface to handle keyboard input
 *   - Allow players to send keyboard commands to server via UI
 *   - `stdin` object acts as an event listener 
 *   - Implements two functions associated with stdin object 
 *   -  1. Implement setupInput to received user input from keyboard
 *   -  2. Implement handleUserInput that specifies action once input received 
 *   - Implement exiting the game upon user keying  ctrl + c  
 */

/**  *** Implements handleUserInput function *** 
 *   - Function specifies action to take once input(keyboard input) is received 
 *   - 1. Implements 1st action exiting the game upon user keying  ctrl + c  
 */
const handleUserInput = function () {
  if (key === "\u0003") {
    console.log('You have quit the current session and exited the game.')
    process.exit();
  }
};

/** *** Implements setupInput function *** 
 *   - function allows for user input from keyboard to be received 
 *   - contains general conditions (RawMode, Encoding, resume)
 *   - contains/references handleUserInput 
 */
const setupInput = function () {
  const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
