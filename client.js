/** ******** Separate Module for TCP Connections - `client.js` ********
 *   - connect function moved here from `play.js` & required in `play.js`
 */

/** **** IMPLEMENT `connect` FUNCTION ****
 *     - `connect` function establishes a connection with the game server
 *     - Immediately logs message to client "Connecting …" until connected
 *     - Assumes `localhost` as host IP address when connecting 
 *     - Assumes port 50541 
 *     - Event handlers incorporated - CONNECTED & INCOMING DATA
 */
const net = require("net");

/** *** CONNECT - establishes a connection with the game server *** */
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", /* IP address here  */
    port: 50541,       /* PORT number here */
  });

  /** interpret incoming data as text */
  conn.setEncoding("utf8");

  /** *** CONNECTED - event handler - confirms successful server connection ***
  *  - logs message to client/player upon establishing successful with server 
  */
  conn.on('connect',()=>{
    console.log('You\'re successfully connected to the server.');
  });

  /** INCOMING DATA - event handler **
   *  - allows `connect` function to handle incoming data
   *  - upon receipt of data, logs message 'Server say:' then data
   */
  conn.on('data', (data) => {
    console.log(`Server says: ${data}`);
  }); 

  return conn;
};

module.exports = { connect };