var mysql = require('mysql');
var settings = require('./settings');
//var con = mysql.createConnection({
//	// 一定要注意 小心有炸
//	host: 'localhost',
//	port: 8888,
//	user: 'root',
//	password: '',
//	database: '2017-07-02'
//});
var con = mysql.createConnection(settings.db);

var sql = {
	add: 'INSERT INTO news (title,content,imageurl,newsfrom,date,tag) VALUES (?,?,?,?,?,?)',
	ask: `SELECT * FROM news`,
	upd: `UPDATE news SET title = ? , content = ? , imageurl = ? , newsfrom = ? , date = ? , tag = ? WHERE Id = ?`,
	del: 'DELETE FROM news ',
	pag: `SELECT COUNT(id) FROM news`
};

con.add = function(sql1) {
	let sql2 = sql1 || "";

	function test(req, res, err) {
		var obj = req.body;
		console.log(req.body);
		con.query(sql.add + sql2, [obj.title, obj.content, obj.imageurl, obj.newsfrom, obj.date, obj.tag], function(err1, results, fields) {
			if(err1) throw err1;
			else {
				console.log(results);
				res.send({
					id: results.insertId,
					error: 0
				});
			}
			//		con.end();
		});
		//	con.end();
	};
	return test;
}
con.ask = function(sql1) {

	let sql2 = sql1 || "";

	function test(req, res, err) {
		if(sql1 === 'tag')
			sql2 = " WHERE `tag`='" + req.body.tag + "'" + " ORDER BY date ";
		//		console.log(req.url); //ask
		//		console.log(req.baseUrl); //admin2
		//		console.log(req.path);//ask
		//	data.unshift(obj);
		//	let str = JSON.stringify(data, null, '\t');
		con.query(sql.ask + sql2, function(err, results, f) {
			//			console.log(results);
			//			console.log(sql.ask + sql2);
			// res.send({state:'ok',data:results[0]})
			res.send(results);
			//		con.end();
		});
	};
	return test;
	//	con.end();
}
con.del = function(sql1, id1) {
	let sql2 = sql1 || "WHERE id = ? ";

	function test(req, res, err) {
		let obj = req.body; //obj 请求的个体
		let id2 = id1 || [obj.id];
		console.log(sql.del + sql2);
		con.query(sql.del + sql2, id2, function(err1, results, fields) {
			if(err1) throw err1;
			else {
				//			res.send({
				//				error: 0
				//			});
				res.send("111222111");
			}
		})
		//	con.end();
	};
	return test;
}
con.upd = function(sql1) {
	let sql2 = sql1 || "";

	function test(req, res, err) {
		var obj = req.body;
		con.query(
			sql.upd + sql2, [obj.title, obj.content, obj.imageurl, obj.newsfrom, obj.date, obj.tag, obj.id],
			function(err1, results, fields) {
				//		console.log("!!!");console.log(err1);
				//		console.log("!!!");console.log(results);
				//		console.log("!!!");console.log(fields);
				if(err1) throw err1;
				else {
					res.send({
						error: 0
					});
				}
				//		con.end();
			});
	}
	return test;
}
//未完成
con.pag = function(sql1) {
	let sql2 = sql1 || "";

	function test(req, res, err) {
		if(sql1 === 'tag')
			sql2 = " WHERE `tag`='" + req.body.tag + "'" + " ORDER BY date ";
		con.query(
			sql.pag + sql2, [obj.title, obj.content, obj.imageurl, obj.newsfrom, obj.date, obj.tag, obj.id],
			function(err1, results, fields) {
				//		console.log("!!!");console.log(err1);
				//		console.log("!!!");console.log(results);
				//		console.log("!!!");console.log(fields);
				if(err1) throw err1;
				else {
					res.send(results);
				}
				//		con.end();
			});
	}
	return test;
}

//con.com =function(){
//
//	function()
//	return test;
//}
module.exports = con;