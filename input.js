/** ******** MAIN USER INTERFACE - INPUT FILE - `input.js` ********
 *
 *  - this is a separate module to handle all user inputs
 * 
 *  *** Implements User Interface Functions ***
 *   - Implements initial steps in User interface to handle keyboard input
 *   - Allow players to send keyboard commands to server via UI
 *   - `stdin` object acts as an event listener 
 *   - Implements two functions associated with stdin object 
 *   -  1. Implement setupInput to received user input from keyboard
 *   -  2. Implement handleUserInput that specifies action once input received 
 *   - Implement exiting the game upon user keying  ctrl + c  
 */

/** ** Imports `keyboardInputs` object from `constants.js` ** */
const { keyboardInputs } = require("./constants");

// Declares `connection` variable to store the active TCP connection object
let connection;

/** *** Implements handleUserInput function *** 
 *   - Function specifies action to take once input(keyboard input) is received 
 *   - 1. Implements 1st action exiting the game upon user keying  ctrl + c  
 *  *** `connection` connects keybaordInput and server commands *** 
 *   - if function receives valid user input (letters to move or send message)  
 *   - sends corresponding command/value to server via the `connection` object 
  */
const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log('You have quit the current session and exited the game.')
    process.exit();
  }
  if (keyboardInputs[data]) {
    connection.write(keyboardInputs[data]);
  }
};

/** *** Implements setupInput function *** 
 *  - function allows for user input from keyboard to be received from stdin
 *  - RawMode sets standard input stream to raw mode & Encoding to UTF-8 
 *  - Resume resumes reading from the standard input stream
 *  - On listen for incoming data on the standard input stream 
 *       then calls `handleUserInput` and passes data as argument 
 */
const setupInput = function (conn) {
  const stdin = process.stdin;
    connection = conn
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
  return stdin;
};

/** Exports the `setupInput` function */
module.exports = { setupInput };
