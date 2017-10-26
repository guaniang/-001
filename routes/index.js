var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.post('/gx', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')
	var temp = fs.readFileSync('message.txt','utf-8')
	temp = JSON.parse(temp)
	temp.push({message:req.body.message,name:req.body.name})
	fs.writeFileSync('message.txt',JSON.stringify(temp));	
	res.send({data:temp})
});
router.post('/abc', function(req, res, next) {
	es.header('Access-Control-Allow-Origin','*')
  res.send({data:temp})
});

module.exports = router;
