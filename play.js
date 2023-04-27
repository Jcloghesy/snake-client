/** ******** MAIN GAME CLIENT FILE - `play.js` ********
 *
 *  - File serves as the main file through which the game client is launched
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
  
  /**  TODO *** IDLE TIMEOUT EVENT Handler - initial work***
   *  - placeholder for idle timeout event to be implemented
   *  - this handler allows `connect` function to log user off when idle  
   *  - for set amount of continuous time (say 20 seconds)
   *  - Upon being logged off, log message on client 'Yo cuz, you ded ...'
   */ /*
  conn.setTimeout(20000);
  conn.on('timeout', () => {
  console.log('Yo cuz, you ded - you ded cuz you been idle! \n This servers be hav\'n some serious fangs and a bad attitude!' );
  conn.end();
  });
  */

  return conn;
};

/** Logs message to console client is attempting to connect to server */
console.log("Connecting ...");

connect();