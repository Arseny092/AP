var express = require('express');
var compress = require('compression');
var cors = require('cors');
var app = express();
var path = require('path');

app.use(cors());

var cacheTime = 86400000 * 7;

app.use(compress({
    threshold: 512
}));

app.use(express.static(path.join(process.cwd(), './client/public'), {
    maxAge: cacheTime
}));

app.disable('x-powered-by');

console.log(process.env.PORT || 5000);
app.listen(process.env.PORT || 5000);