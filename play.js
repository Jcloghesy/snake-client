/** ******** MAIN GAME CLIENT FILE - `play.js` ********
 *
 *   - the main file where the game client interacts with server
 *         - requires connect function from client.js
 *         - requires setupInputs function from input.js
 */

/**   **** Requires the `connect` Function from `client.js` **** */  
const { connect } = require('./client');
const { setupInput } = require('./input');

/** Logs message to console client is attempting to connect to server */
console.log("Connecting ...");

setupInput(connect());
