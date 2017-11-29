const express = require('express');

const server = express();

server.set('view engine', 'pug');

server.use(require('./controllers'));
server.use(require('./routes'));

server.listen(3000, () => console.log('server listening on port 3000'));