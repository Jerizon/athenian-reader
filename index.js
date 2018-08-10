var express = require('express');
var app = express();
const path = require('path');

var port = process.env.PORT || 8080;
app.use(express.static('./build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(port, ()=>{
  console.log('App is listening on port ' + port);
})