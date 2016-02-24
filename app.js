var express = require("express");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public");
})

app.listen(PORT, function() {
  console.log("Express is listening on port: " + PORT);
})
