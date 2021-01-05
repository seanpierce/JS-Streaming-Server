// Add this on the top of app.js file
// next to all imports
const server = require('./config/server');
 
// and call run() method at the end
// file where we start our web server
 
server.run();