var express = require('express');
var settings = require('../settings'); /*?*/
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', {
		title: 'Express'
	});
});

router.get('/', (req, res, next) => {
	var con = mysql.createConnection(settings);
	//	sql
	//创建CREATE DATABASE my_db
	//	CREATE TABLE 表名称
	//		(
	//		列名称1 数据类型,
	//		列名称2 数据类型,
	//		列名称3 数据类型,
	//		....
	//		)
	//获取 SELECT LastName列名 ,FirstName列名 FROM Persons表名 WHERE条件  City='Beijing' AND Adress =’The THird Avenue‘
	//获取 SELECT DISTICT去重  LastName列名 FROM Persons表名 WHERE条件 BETWEEN  City='Beijing'含 AND 'Shanghai'不含
	//获取SELECT Company, OrderNumber FROM Orders ORDER BY排序  Company列 （默认字母升序）， Address DES
	//新建行 INSERT INTO Persons表名  VALUES ('Gates'值, 'Bill', 'Xuanwumen 10', 'Beijing')
	//INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees')
	//修改数据 UPDATE Person SET Address = 'Zhongshan 23', City = 'Nanjing' WHERE LastName = 'Wilson'
//	删除 DELETE FROM Person WHERE LastName = 'Wilson'
	//删除所有行 表还在 DELETE FROM table_name

	var sql = ["SELECT * From `persons`", ];


	con.query(sql[0], function(error, results, fields) {
		if(error) throw error;
		else {
			console.log('The solution is: ', results[0].solution);
		}
	});

	con.end();

})

module.exports = router;