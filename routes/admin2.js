/*
**********************************************
	usage:
			admin/add		添加&修改
				return：{error:0, id: 新添加内容的ID}

			admin/delete	获取页数
				return：{error:0}

			admin/change

			admin/getMsg 	获取数据库
				return:[{id:id,title:title,content:content,imageurl:imageurl,from：from,date:date,tag:tag},{id:id,title:title,content:content,imageurl:imageurl,from：from,date:date,tag:tag}...]

	注意：	服务器所返回的时间戳都是秒（JS是毫秒）
**********************************************
*/

var express = require('express');
var router = express.Router();

//var mysql = require('mysql');
var con = require('../connect2');
//var fs = require('fs');

//var con = mysql.createConnection(settings);

//con.connect();

/* GET users listing. */
router.get('/', (req, res, next) => {
	res.render('admin');
});

//ask 可用
//router.post('/ask', con.ask());
router.post(/^\/ask$/, con.ask()); //正则可以使用
//add
router.post('/add', con.add());

//upd
router.post('/upd', con.upd());

//del
router.post('/del', con.del());

router.post('/new', function(req, res, err) {
	let result1 = [];
	let obj = req.body;

//	con.query('SELECT COUNT(*) FROM `news`', function(err, result2, f) {
//
//		result1.push(result2[0]);
//		console.log(result1);
//		//		res.send(result1);
//
//	});
	con.query('SELECT * FROM `news` LIMIT ?,8', [obj.iNow * 8], function(err, result3, f) {
//			console.log(result3);
			result1.push(result3);
			console.log(result1);
			res.send(result1);
		});

});
router.post('/new2', con.pag2());


//------生成随机数据

//function random(n) {
//	return Math.floor(Math.random() * n);
//}
//var tit = ['四川一废弃加油加气站拆除时发生爆炸 致1死2伤', '广河高速19死事故25名伤员送医抢救 现场恢复通行', '习近平会见韩国总统文在寅'];
//const newsTag = ['推荐', '百家', '本地', '娱乐', '社会', '军事', '搞笑', '女人', '互联网', '科技', '生活', '国际', '国内', '体育', '汽车', '财经', '房产', '时尚', '教育', '游戏', '旅游', '人文', '创意']; //23
//var img = ['https://t11.baidu.com/it/u=4179008074,1891803662&amp;fm=173&amp;s=EE8A25C3D0B1138CBDBD05140100C093&amp;w=218&amp;h=146&amp;img.JPEG', 'https://t11.baidu.com/it/u=3443132287,618470302&amp;fm=173&amp;s=399A37DB8CBA9B842E106C700300C0B2&amp;w=218&amp;h=146&amp;img.JPEG', 'https://ubmcmm.baidustatic.com/media/v1/0f000Q5k-sWUxDfSwfn3e6.jpg'];
//
//var date = new Date();
//console.log(random(3));
//
//router.post('/new', function test(req, res, err) {
//	con.query('INSERT INTO news(title, content, imageurl, newsfrom, date, tag) VALUES( ? , ? , ? , ? , ? , ? )', [tit[random(3)], tit[random(3)], img[random(3)], tit[random(3)], date, newsTag[random(23)]], function(err1, results, fields) {
//		if(err1) throw err1;
//		else {
//			console.log(results);
//			res.send({
//				id: results.insertId,
//				error: 0
//			});
//		}
//	});
//});

module.exports = router;
//111