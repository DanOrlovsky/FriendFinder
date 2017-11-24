const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT);