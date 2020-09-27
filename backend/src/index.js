// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const {port,env} = require('./config/vars');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

// open mongoose connection
mongoose.connect();

// listen to requests
app.listen(port, '127.0.0.1', ()=> console.info(`server started on port ${port} (${env})`));

/**
 * Exports express
 */

module.exports = app;