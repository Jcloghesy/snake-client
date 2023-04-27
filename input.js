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
 *   - 2. Binds w a s & d keys to be the up, left, down, right movement keys
 *   - 3. Implements sending signals to the server for the respective movements
 */

/** ** Stores the active TCP connection object. ** */
let connection;

const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log('You have quit the current session and exited the game.')
    process.exit();
  } else if (data === "w") {
    connection.write("Move: up");
    console.log("up");
  } else if (data === "a") {
    connection.write("Move: left");
  } else if (data === "s") {
    connection.write("Move: down");
  } else if (data === "d") {
    connection.write("Move: right");
  } else if (data === "v") {
    connection.write("Say: It is 'V' for Victory!!");
  } else if (data === "x") {
    connection.write("Say: You all going to end up ded, so might as well quit now!!")};
};

/** *** Implements setupInput function *** 
 *   - function allows for user input from keyboard to be received 
 *   - contains general conditions (RawMode, Encoding, resume)
 *   - contains/references handleUserInput 
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

module.exports = { setupInput };
