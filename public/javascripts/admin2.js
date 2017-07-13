$(document).ready(function() {
	//	console.log(1);
	var ev = window.ev || window.event;

	var newsData = {};
	const newsTag = ['推荐', ' 百家', ' 本地', ' 娱乐', ' 社会', ' 军事', ' 搞笑', ' 女人', ' 互联网', ' 科技', ' 生活', ' 国际', ' 国内', ' 体育', ' 汽车', ' 财经', ' 房产', ' 时尚', ' 教育', ' 游戏', ' 旅游', ' 人文', ' 创意'];

	//ask 刷新
	function ask() {
		$.ajax({
			type: "post",
			url: '/admin2/ask',
			success: function(data1) {
				$('#newstbody').html('');
				newsData = {};
				for(let name in data1) {
					plus(data1[name]);
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {

			},
			async: true //异步
		});
	}
	ask();
	//askPage
	var iNow = 0,page;
	const limit = 7;
	//
	function getpagecount() {

		$.ajax({
			type: "post",
			url: '/admin2/new2',
			data: {
				iNow: iNow,
				limit: limit
			},
			success: function(data1) {
				console.log(111);
				page = data1[0][0]["COUNT( * )"];
				page = Math.ceil(page / 7);
				$('#newspage').html('');
				pluspage(page, iNow);
				let data2 = data1[1];
				$('#newstbody').html('');
				newsData = {};
				for(let name in data2) {
					plus(data2[name], 'append');
				}
				//				console.log(data2,'append');

			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(XMLHttpRequest, "123", textStatus, "123", errorThrown);
			},
			async: true //异步
		});
	}
	$('#btnid1').click(function() {
		//		console.log('222');
		getpagecount();
	})
	getpagecount();
	//	ask();

	//添加
	function plus(data, pstyle) {
		pstyle = pstyle || 'prepend';
		$("#newstbody")[pstyle](`<tr class="newstr">
			<th class="newsid  newstd" scope="row">${data.id}</th>
			<td class="newstitle  newstd">${data.title}</td>
			<td class="newsdate  newstd">${data.date.substring(0, 10)}</td>
			<td class="newsbutton "><button class="btn btn-danger">删除</button></td>
		</tr>`);
		newsData[data.id] = data;
	};

	function pluspage(page, inow) {

		let sentence = `<li>
							<a href="#" class="pageprev pagesign" data-pageno="prev" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						`;
		let first = 0,
			length = 7;
		if(page < 7) {
			length = page;
			first = 0;
		} else {
			first = (inow - 3 > 0) ? inow - 3 : 0;
			first = (inow + 3 > page) ? page-7 : first;
		}

		for(let i = first; i < first+length; i++) {
			sentence += `<li>
							<a class="pageno pagesign" data-pageno="${i}" href="#">${i+1}</a>
					</li>
					`;
		}
		sentence += `<li>
						<a href="#" class="pagenext pagesign" data-pageno="next" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
					`;
		$("#newspage").prepend(sentence);
	};
	//	function update(){;}
	//red
	$('.news').change(function() {
		if($(this).val() == '')
			$(this).addClass('borderred');
		else
			$(this).removeClass('borderred');
	});
	$('.news').blur(function() {
		if($(this).val() == '')
			$(this).addClass('borderred');
		else
			$(this).removeClass('borderred');
	});
	$('.news').focus(function() {
		$(this).removeClass('borderred');
	})
	//submit save //提交 success //提交 保存按钮点击事件
	$('.newssend').click(function() {
		let re = false;
		//提交 空白处变红
		$('.news').each(
			function(index, element) {
				console.log(this);

				if($(this).val() == "") {
					$(this).addClass('borderred');
					$(this).one('focus', function() {
						$(this).removeClass('borderred');
					})
					re = true;
				}

			}
		)
		if(re) {
			return false;
		}

		//start
		let _this = this;
		let url = $(this).attr('id') == 'newssubmit' ? '/admin2/add' : '/admin2/upd';

		let data = {
			title: $('#newstitle').val(),
			content: $('#newscontent').val(),
			imageurl: $('#newsimageurl').val(),
			newsfrom: $('#newsfrom').val(),
			date: $('#newsdate').val(),
			tag: $('#newstag').val()
		}
		if($(this).attr('id') == 'newssave')
			data.id = $('#dataid').text();
		console.log(data);
		$.ajax({
			type: "post",
			url: url,
			data: data,
			success: (data1) => {
				//提交
				if($(_this).attr('id') == 'newssubmit') {
					data.id = data1.id;
					plus(data);
				}
				//修改
				else {
					ask();
					$('#newssave').hide();
					$('#newssubmit').show();
				};
				//				清空
				$('.news').val('');
				let oDate = new Date();

				function a(a) {
					return a >= 10 ? a : "0" + a;
				}
				$('#newsdate').val(`${oDate.getFullYear()}-${a(oDate.getMonth()+1)}-${a(oDate.getDate())}`);
				$('#newstag').val('推荐');
				$(_this).blur();
			},
			error: function() {;
			},
			async: true
		});
	});

	//delete
	$('#newstbody').on('click', 'td button', function() {
		let _this = this;
		$.ajax({
			type: "post",
			url: '/admin2/del',
			data: {
				id: $(this).parents('tr').find('.newsid').text()
			},
			success: (data, textStatus, jqXHR) => {
				//				console.log(this);
				delete newsData[$(this).parents('tr').find('.newsid').text()];
				$(this).parents('tr').remove();
			},
			error: (XMLHttpRequest, textStatus, errorThrown) => {
				console.log("not found this id in db");
			},
			async: true //异步
		});
	});
	//edit
	$('#newstbody').on('click', '.newstd', function() {
		let json = newsData[$(this).parent('tr').find('.newsid').text()];
		$('#newssave').show();
		$('#newssubmit').hide();
		$('#newstitle').val(json.title);
		$('#newscontent').val(json.content);
		$('#newsimageurl').val(json.imageurl);
		$('#newsfrom').val(json.newsfrom);
		$('#newsdate').val(json.date.substring(0, 10));
		$('#newstag').val(json.tag);
		$('#dataid').html(json.id);
	});

	$('#newspage').on('click', '.pagesign', function() {
		let str = $(this).attr('data-pageno');
		console.log(str);
		switch(str) {
			case (str.match(/^\d+$/)||{}).input:
				iNow=Number(str);
				break;
			case 'prev':
				iNow=0;
				break;
			case 'next':
				iNow=page-1;
				break;
			default:
				break;
		}
		getpagecount();
	});

	$('#clear').click(function() {
		$('.news').each(
			function(index, element) {
				$(this).val('');
				$(this).removeClass('borderred');
				$('#newssave').hide();
				$('#newssubmit').show();
			}
		);
		console.log(this);
		$(this).blur();
	});
});

//废弃
//	右侧点击事件 js委托时
//	$('#newstbody').click(function(ev) {
//		var src = ev.srcElement || ev.target;
//		//删除
//		if(src.tagName == "BUTTON") {
//			$.ajax({
//				type: "post",
//				url: '/admin2/delete',
//				data: {
//					id: $(src).parents('tr').find('.newsid').text()
//				},
//				success: function(data, textStatus, jqXHR) {
//					delete newsData[$(src).parents('tr').find('.newsid').text()];
//					$(src).parents('tr').remove();
//				},
//				error: function(XMLHttpRequest, textStatus, errorThrown) {
//					console.log("not found this id in db");
//				},
//				async: true //异步
//			});
//		} else {
//			let json = newsData[$(src).parent('tr').find('.newsid').text()];
//			$('#newssave').show();
//			$('#newssubmit').hide();
//			$('#newstitle').val(json.title);
//			$('#newscontent').val(json.content);
//			$('#newsimageurl').val(json.imageurl);
//			$('#newsfrom').val(json.newsfrom);
//			$('#newsdate').val(json.date.substring(0, 10));
//			$('#newstag').val(json.tag);
//			$('#dataid').html(json.id);
//		}
//
//	});