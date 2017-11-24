// ----------------------------------------------
// -- Server                                   --
// ----------------------------------------------

// Connect to Express
const express = require('express');
const app = express();

// Add the body parser to send Json.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Add our routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes')(app);

// Set up our port and open our server.
const PORT = process.env.PORT || 3000;
app.listen(PORT);