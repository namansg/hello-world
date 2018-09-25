const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({
  limit: '10mb',
  strict: false
});
const app = express();
app.use(jsonParser);
app.set('port', 80);

app.get("*",function(req,res){
  var path = req.path;
  if(!path) return res.status(401).send("Unauthorized");
  if(path.startsWith('/unauth')) return res.status(401).send("Unauthorized");
  res.send("OK");
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
