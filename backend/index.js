const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const {port} = require('./config')
const bodyParser = require('body-parser');


require('./db/mongoose');

// parsery
app.use(bodyParser.json());

//routes
app.use('/api/', apiRouter);

// server
app.listen(port, (req, res) =>{
    console.log('Serwer słucha... http://localhost:' + port);
});