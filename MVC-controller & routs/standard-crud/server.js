const path = require('path');
const express = require('express');
const app = express();

console.log('request?');


app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next){
  res.status(404);
  res.send('404 File Not Found');
});


const PORT = process.env.PORT || 8080;


app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
});