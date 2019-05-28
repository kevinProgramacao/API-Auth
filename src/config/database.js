const mongoose  = require('mongoose');
const config    = require('./default.json');

mongoose.connect(config.mongoURI, { useNewUrlParser: true } );
mongoose.Promise = global.Promise;

module.exports = mongoose;