// Create web server
// Create a new express server
const express = require('express');
const app = express();
// Create a new express server
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create a new express server
const comments = require('./comments');
// Create a new express server
app.use('/comments', comments);
// Create a new express server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Create a new express server
module.exports = app; 
// Create a new express server