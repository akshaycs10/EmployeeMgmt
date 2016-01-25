var path = require('path');

var appconfig = {};
appconfig.views = path.join(__dirname, 'views')
appconfig.secret='imsherlocked';
module.exports=appconfig;