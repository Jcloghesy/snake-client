/** ******** Separate Module for TCP Connections - `client.js` ********
 * 
 *  - a separate file /module for all TCP connections
 *  - connect function moved here from `play.js` & required in `play.js`
 */

/** requires the `net` function for use in the `connect` function */
const net = require("net");

/** ** Import the `IP` and `PORT` from the `constants` ** */
const { IP, PORT } = require("./constants");


 /** **** IMPLEMENTS `connect` FUNCTION ****
 *     - `connect` function establishes a connection with the game server
 *     - Immediately logs message to client "Connecting …" until connected
 *     - conn object creates and holds a new TCP connection 
 *     - Event handlers incorporated - CONNECTED (with name) & INCOMING DATA
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,     /* IP address here  */
    port: PORT,   /* PORT number here */
  });

  /** *** DATA AS TEXT - interpret incoming data as text *** */
  conn.setEncoding("utf8");

  /** CONNECTED - event handler with SEND NAME with additional feature **
   * - Upon server connection, logs message 'You're successfully connected ... '
   * - Additional message is also sent with snake's name 'Name: JCC'
   * - removed commented out move: up command 
   */
  conn.on('connect',()=>{
    console.log('You\'re successfully connected to the server.');
    conn.write('Name: JCC ');
  });

  /** INCOMING DATA - event handler **
   *  - allows `connect` function to handle incoming data
   *  - upon receipt of data, logs message 'Server say:' then data
   */
  conn.on('data', (data) => {
    console.log(`Server says: ${data}`);
  }); 

  /** returns the TCP connection object  */
  return conn;
};

/** Exports the `connect` function  */
module.exports = { connect };
