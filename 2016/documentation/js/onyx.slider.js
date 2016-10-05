/*--------------------
	ONYX Slider
	powered by ONYX1812
--------------------*/

//slider autoplay
function sliderPlayFade(){
	var
		slide = $('.slide.active');
		slideFirst = $('.slide:first-child');
	if( slide.is(':last-child') ){
		slide.removeClass('active');
		slideFirst.addClass('active');
	}else{
		slide.removeClass('active').next('.slide').addClass('active');
	}
}
var sliderAutoPlayFade = function sliderAutoPlayFade(){
	setInterval(sliderPlayFade, 2000);
}

//slider autoplay
function sliderPlaySlide(){
	var
		slide = $('.slide.active');
		slideFirst = $('.slide:first-child');
	if( slide.is(':last-child') ){
		slide.addClass('active-next').removeClass('active');
		slideFirst.addClass('active');
		setTimeout(function(){
			slide.removeClass('active-next');
		}, 1000);
	}else{
		slide.addClass('active-next').removeClass('active').next('.slide').addClass('active');
		setTimeout(function(){
			slide.removeClass('active-next');
		}, 1000);
	}
}
var sliderAutoPlaySlide = function sliderAutoPlaySlide(){
	$('.slider').addClass('next-slide');
	setInterval(sliderPlaySlide, 2000);
}

// slider click fade
var sliderClickFade = function sliderClickFade(){
	$('.slider-next').on('click', function(){
		console.log('next click');
		var
			slide = $('.slide.active');
			slideFirst = $('.slide:first-child');
		if( slide.is(':last-child') ){
			slide.removeClass('active');
			slideFirst.addClass('active');
		}else{
			slide.removeClass('active').next('.slide').addClass('active');
		}
	});
	$('.slider-prev').on('click', function(){
		console.log('prev click');
		var
			slide = $('.slide.active');
			slideLast = $('.slide:last-child');
		if( slide.is(':first-child') ){
			slide.removeClass('active');
			slideLast.addClass('active');
		}else{
			slide.removeClass('active').prev('.slide').addClass('active');
		}
	});
}

// slider click slide
var sliderClickSlide = function sliderClickSlide(){
	$('.slider-next').hover(function(){
		$(this).parent().addClass('next-slide').removeClass('prev-slide');
	});
	$('.slider-next').on('click', function(){
		var
			slide = $('.slide.active');
			slideFirst = $('.slide:first-child');
		if( slide.is(':last-child') ){
			slide.addClass('active-next').removeClass('active');
			slideFirst.addClass('active');
			setTimeout(function(){
				slide.removeClass('active-next');
			}, 1000);
		}else{
			slide.addClass('active-next').removeClass('active').next('.slide').addClass('active');
			setTimeout(function(){
				slide.removeClass('active-next');
			}, 1000);
		}
	});
	$('.slider-prev').hover(function(){
		$(this).parent().addClass('prev-slide').removeClass('next-slide');
	});
	$('.slider-prev').on('click', function(){
		$(this).parent().addClass('prev-slide').removeClass('next-slide');
		var
			slide = $('.slide.active');
			slideLast = $('.slide:last-child');
		if( slide.is(':first-child') ){
			slide.addClass('active-prev').removeClass('active');
			slideLast.addClass('active');
			setTimeout(function(){
				slide.removeClass('active-prev');
			}, 1000);
		}else{
			slide.addClass('active-prev').removeClass('active').prev('.slide').addClass('active');
			setTimeout(function(){
				slide.removeClass('active-prev');
			}, 1000);
		}
	});
}

var onyxSlider = {
	fadeAuto: sliderAutoPlayFade,
	slideAuto: sliderAutoPlaySlide,
	fade: sliderClickFade,
	slide: sliderClickSlide
}