// JavaScript Document

$(document).ready(function(){
						   
	$("td").hover(function() {				   
		$(".popup", this).fadeIn('slow');
	 }, function() {
		$(".popup", this).fadeOut('fast');
	 });
	
	$(".tabs").hover(
		function() {
			$(this).animate({backgroundColor: "#ff0000"}, 300);
		},
		function() {
			$(this).animate({backgroundColor: "#000000"}, 300);
		}
	);
	
	$("#about_link").click(function() {
		$('html, body').animate({scrollTop: $("#about_h2").offset().top}, 700);
	});
	
	$("#when_where_link").click(function() {
		$('html, body').animate({scrollTop: $("#when_where_h2").offset().top}, 700);
	});
	
	$("#sessions_link").click(function() {
		$('html, body').animate({scrollTop: $("#sessions_h2").offset().top}, 700);
	});
	
	$("#social_media_link").click(function() {
		$('html, body').animate({scrollTop: $("#social_media_h2").offset().top}, 700);
	});
	
	$(".back_to_top").click(function() {
		$('html, body').animate({scrollTop: $("h1").offset().top}, 700);
	});
	
});