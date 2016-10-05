$(document).ready( function() {
/*--------------------
		MENU
--------------------*/
	$('.nav-btn').on('click', function(){
		$('.nav-list').toggle('slow');
		$(this).toggleClass('active');
		return false;
	});
	$('.dropdown').on('click', function(){
		$(this).toggleClass('active');
		$(this).children('ul').toggle('slow');
		return false;
	});
	$('.dropdown2').on('click', function(){
		$(this).toggleClass('active');
		$(this).children('ul').toggle('slow');
		return false;
	});
});