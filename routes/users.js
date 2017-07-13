var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET users listing. */
router.get('/', (req, res, next)=> {
	res.send('respond with a resource');
});

// init data(commment)
var data;

//right
//fs.readFile('./comment.json', function(err, data1) {
//	if(err) {
//		data = [];
//		console.log("Do not have '/comment.json");
//	} else {
//		data = data1;
//		// buffer to string to json
//		data = JSON.parse(data.toString());
//		//console.log(data1);
//	}
//})

//utf 8
fs.readFile('./comment.json', 'utf8', (err, data1)=> {
	if(err) {
		data = [];
		console.log("Do not have '/comment.json");
	} else {
		data = JSON.parse(data1);
//console.log("users data");
//console.log(data1);
		//console.log(data1);
	}
})

// get addComment Listening
router.post('/addComment', (req, res, next)=> {
//	var {author,comment} = req.body;
//
//	data.push({
//		author: author,
//		comment: comment
//	});
//	var str = JSON.stringify(data);
	data.push(req.body);
	let str =JSON.stringify(data);
	fs.writeFile('./comment.json', str, (err)=> {
		if(err) {
			console.log("fs.writeFile Error");
			//停止WriteFile
			process.exit(1);
		}
		res.send('success');
	});
});

router.post('/read', (req, res, next)=> {
	//console.log(req);
	//res.send('111');
	res.send(data);
});
module.exports = router;