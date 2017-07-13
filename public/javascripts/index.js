console.log('111');
$(function() {
	$.ajax({
		url: '/index/ask',
		type: 'post',
		data: {
			tag: "推荐"
		},
		success: function(data) {
//			$('.newstag').removeClass('bbwhite');
//			$(_this).addClass('bbwhite');
			console.log(data);
			//				$('.swiper2').html(`<div class="swiper-wrapper">
			//					<div class="swiper-slide">
			//						<img src="https://timg01.bdimg.com/timg?tc&amp;size=b508_318&amp;sec=0&amp;quality=75&amp;cut_x=64&amp;cut_y=0&amp;cut_h=0&amp;cut_w=508&amp;di=34db43c1875e7298e2c472c8f7eae655&amp;src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C5%252C637%252C318%2Fsign%3D38e022bdb6315c6057da31afb081e726%2Fbd315c6034a85edf55af708b43540923dd547573.jpg" alt="韩未来武直“撞脸”直9？">
			//						<p class="swiper2-des-1"><span>韩未来武直“撞脸”直9？</span></p>
			//					</div>
			//					<div class="swiper-slide">
			//						<img src="https://timg01.bdimg.com/timg?tc&amp;size=b716_448&amp;sec=0&amp;quality=75&amp;cut_x=90&amp;cut_y=0&amp;cut_h=0&amp;cut_w=716&amp;di=bbffbba0640ad5adda8dfd2c8070743e&amp;src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C0%252C897%252C448%2Fsign%3D19e5f9d22aa446236a85ff22a5125e3e%2F503d269759ee3d6d213c046349166d224e4adea4.jpg" alt="洪峰抵武汉两江交汇清浊交融">
			//						<p class="swiper2-des-1"><span>韩未来武直“撞脸”直9？</span></p>
			//					</div>
			//
			//					<div class="swiper-slide">
			//						<img src="https://timg01.bdimg.com/timg?tc&amp;size=b508_318&amp;sec=0&amp;quality=75&amp;cut_x=64&amp;cut_y=0&amp;cut_h=0&amp;cut_w=508&amp;di=75571ff7665f6ba2c397d928053323d1&amp;src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C0%252C637%252C318%2Fsign%3Db21228c0db09b3defff0be28f18f40b1%2Fd009b3de9c82d15828e3d6198a0a19d8bc3e4231.jpg" alt="乐视总部门口躺满讨债人">
			//						<p class="swiper2-des-1"><span>韩未来武直“撞脸”直9？</span></p>
			//					</div>`)
			$('#newslist-container').html('');
			$.each(data, function(index, element) {

				$('#newslist-container').prepend(
					`<div class="index-list-item" id="${data[index].id}" style="display: block;">
								<div class="index-list-main showleft">
									<div class="index-list-image">
										<!-- react-text: 175 -->
										<!-- /react-text --><img src="${data[index].imageurl}" data-save="true" class=""></div>
									<div class="index-list-main-text">
										<div class="index-list-main-title">${data[index].title}</div>
										<div class="index-list-bottom">
											<div class="index-list-main-time"><b class="tip-time">${data[index].date.substring(0,10)}</b>
												<!-- react-text: 183 -->
												<!-- /react-text -->
											</div>
										</div>
									</div>
								</div>
							</div>`)
			})

		},
		error: function() {;
		}
	})
	$('.newstag').click(function() {
		console.log($(this).text())
		let _this = this;
		$.ajax({
			url: '/index/ask',
			type: 'post',
			data: {
				tag: "推荐"
			},
			success: function(data) {
				$('.newstag').removeClass('bbwhite');
				$(_this).addClass('bbwhite');
				console.log(data);
				$('#newslist-container').html('');
				$.each(data, function(index, element) {

					$('#newslist-container').prepend(
						`<div class="index-list-item" id="${data[index].id}" style="display: block;">
								<div class="index-list-main showleft">
									<div class="index-list-image">
										<!-- react-text: 175 -->
										<!-- /react-text --><img src="${data[index].imageurl}" data-save="true" class=""></div>
									<div class="index-list-main-text">
										<div class="index-list-main-title">${data[index].title}</div>
										<div class="index-list-bottom">
											<div class="index-list-main-time"><b class="tip-time">${data[index].date.substring(0,10)}</b>
												<!-- react-text: 183 -->
												<!-- /react-text -->
											</div>
										</div>
									</div>
								</div>
							</div>`)
				})

			},
			error: function() {;
			}
		})
		$.ajax({
			url: '/index/ask',
			type: 'post',
			data: {
				tag: $(this).text()
			},
			success: function(data) {
				$('.newstag').removeClass('bbwhite');
				$(_this).addClass('bbwhite');
				console.log(data);
				//				$('.swiper2').html(`<div class="swiper-wrapper">
				//					<div class="swiper-slide">
				//						<img src="https://timg01.bdimg.com/timg?tc&amp;size=b508_318&amp;sec=0&amp;quality=75&amp;cut_x=64&amp;cut_y=0&amp;cut_h=0&amp;cut_w=508&amp;di=34db43c1875e7298e2c472c8f7eae655&amp;src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C5%252C637%252C318%2Fsign%3D38e022bdb6315c6057da31afb081e726%2Fbd315c6034a85edf55af708b43540923dd547573.jpg" alt="韩未来武直“撞脸”直9？">
				//						<p class="swiper2-des-1"><span>韩未来武直“撞脸”直9？</span></p>
				//					</div>
				//					<div class="swiper-slide">
				//						<img src="https://timg01.bdimg.com/timg?tc&amp;size=b716_448&amp;sec=0&amp;quality=75&amp;cut_x=90&amp;cut_y=0&amp;cut_h=0&amp;cut_w=716&amp;di=bbffbba0640ad5adda8dfd2c8070743e&amp;src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C0%252C897%252C448%2Fsign%3D19e5f9d22aa446236a85ff22a5125e3e%2F503d269759ee3d6d213c046349166d224e4adea4.jpg" alt="洪峰抵武汉两江交汇清浊交融">
				//						<p class="swiper2-des-1"><span>韩未来武直“撞脸”直9？</span></p>
				//					</div>
				//
				//					<div class="swiper-slide">
				//						<img src="https://timg01.bdimg.com/timg?tc&amp;size=b508_318&amp;sec=0&amp;quality=75&amp;cut_x=64&amp;cut_y=0&amp;cut_h=0&amp;cut_w=508&amp;di=75571ff7665f6ba2c397d928053323d1&amp;src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C0%252C637%252C318%2Fsign%3Db21228c0db09b3defff0be28f18f40b1%2Fd009b3de9c82d15828e3d6198a0a19d8bc3e4231.jpg" alt="乐视总部门口躺满讨债人">
				//						<p class="swiper2-des-1"><span>韩未来武直“撞脸”直9？</span></p>
				//					</div>`)
				$('#newslist-container').html('');
				$.each(data, function(index, element) {

					$('#newslist-container').prepend(
						`<div class="index-list-item" id="${data[index].id}" style="display: block;">
								<div class="index-list-main showleft">
									<div class="index-list-image">
										<!-- react-text: 175 -->
										<!-- /react-text --><img src="${data[index].imageurl}" data-save="true" class=""></div>
									<div class="index-list-main-text">
										<div class="index-list-main-title">${data[index].title}</div>
										<div class="index-list-bottom">
											<div class="index-list-main-time"><b class="tip-time">${data[index].date.substring(0,10)}</b>
												<!-- react-text: 183 -->
												<!-- /react-text -->
											</div>
										</div>
									</div>
								</div>
							</div>`)
				})

			},
			error: function() {;
			}
		})

	})
})