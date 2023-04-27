/** ******** MAIN GAME CLIENT FILE - `play.js` ********
 *
 *
 *  - play.js   - the main file where the game client interacts with server
 *              - requires connect function from client.js
 *              - requires setupInputs function from input.js
 *  - client.js - a separate file /module for TCP connections
 *              - references / inputs the connect function 
 *  - input.js  - a separate module for all user inputs
 */

/**   **** Requires the `connect` Function from `client.js` **** */  
const { connect } = require('./client');
const { setupInput } = require('./input');

/** Logs message to console client is attempting to connect to server */
console.log("Connecting ...");

connect();
setupInput();
