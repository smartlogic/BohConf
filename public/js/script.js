// JavaScript Document

$(document).ready(function(){

  $("td").hover(function() {
    $(".popup", this).fadeIn('slow');
   }, function() {
    $(".popup", this).fadeOut('fast');
   });

  $("#tab_container a").hover(
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

  $("#what_is_boh_link").click(function() {
    $('html, body').animate({scrollTop: $("#what_is_boh_h2").offset().top}, 700);
  });

  $("#social_media_link").click(function() {
    $('html, body').animate({scrollTop: $("#social_media_h2").offset().top}, 700);
  });

  $(".back_to_top").click(function() {
    $('html, body').animate({scrollTop: $("h1").offset().top}, 700);
  });

  $('.gallery img').each(function () {
    var img = $(this),
        pre_w = img.width() * 1.0,
        pre_h = img.height() * 1.0;

    // constrain preview size
    img
      .width( 120 )
      .height( pre_h * (120.0 / pre_w));

    // convert link into lightbox compatible form
    img.closest('a')
      .attr('title', function (n, old) {
        return "<a href='" + $(this).attr('href') + "' target='_blank'>" + old + "</a>";
      })
      .attr('href', img.attr('src'));
  });
  $('.gallery a').lightBox();
});

