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
var con = require('../connect');
//var fs = require('fs');

//var con = mysql.createConnection(settings);

//con.connect();

/* GET users listing. */
router.get('/', (req, res, next) => {
	res.render('index', {});
});
//ask 可用
router.post('/index/ask', con.ask('tag'));

module.exports = router;

router.post('/getpage', con.pag('tag'));
//111