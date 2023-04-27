/** ******** MAIN GAME CLIENT FILE - `play.js` ********
 *
 *  - File serves as the main file through which the game client is launched
 */

/** **** IMPLEMENT `connect` FUNCTION ****
 *     - `connect` function establishes a connection with the game server
 *     - Immediately logs message to client "Connecting …" until connected
 *     - Assumes `localhost` as host IP address when connecting 
 *     - Assumes port 50541 
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

  return conn;
};

/** Log message to console client is attempting to connect to server */
console.log("Connecting ...");

connect();