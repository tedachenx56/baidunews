router.post('/new',function(req,res,err){
	console.log('111');
	con.query('SELECT COUNT(*) FROM `news`',function(err, result,f) {
        console.log(result);

        res.send(result);
    });

});

router.post('/new',function(req,res,err){

	con.query(' select * from `news`  where limit >20 and limit <= 30' ,function(err, result,f) {
        console.log(result);

        res.send(result);
    });

});