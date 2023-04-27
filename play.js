/** ******** MAIN GAME CLIENT FILE - `play.js` ********
 *
 *  - File serves as the main file through which the game client is launched
 *  - There is a separate file/module for TCP connections  - `client.js`
 */

/**   **** Requires the `connect` Function from `client.js` **** */  
const {connect} = require('./client')

/** Logs message to console client is attempting to connect to server */
console.log("Connecting ...");

connect();