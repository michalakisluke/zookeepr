// const fs = require('fs');
// const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// Provide a file path to a location in the app (Public folder), and makes
// them into static resources, meaning it can be accessed without a specific
// endpoint
//app.use(express.static('public'));
//const { animals } = require('./data/animals.json');

app.listen(PORT, () =>{
    console.log(`API Server now on port ${PORT}!`);
});