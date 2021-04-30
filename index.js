const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const {port} = require('./config')

//routes
app.use('/', apiRouter);

// server
app.listen(port, (req, res) =>{
    console.log('Serwer słucha... http://localhost:' + port);
});