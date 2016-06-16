$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('.nav a').on('click', function() {
    var current_width = window.innerWidth;
    if (current_width < 768) {
      $('.btn-navbar').click(); //bootstrap 2.x
      $('.navbar-toggle').click(); //bootstrap 3.x
    }
  });
  $('#homelink a').click(function() {
    $('#homelink').addClass('active');
    if ($('#modelslink').hasClass('active')) $('#modelslink').removeClass('active');
    if ($('#aboutlink').hasClass('active')) $('#aboutlink').removeClass('active');
  });
  $('#modelslink a').click(function() {
    $('#modelslink').addClass('active');
    if ($('#homelink').hasClass('active')) $('#homelink').removeClass('active');
    if ($('#aboutlink').hasClass('active')) $('#aboutlink').removeClass('active');
  });
  $('#aboutlink a').click(function() {
    $('#aboutlink').addClass('active');
    if ($('#homelink').hasClass('active')) $('#homelink').removeClass('active');
    if ($('#modelslink').hasClass('active')) $('#modelslink').removeClass('active');
  });
});
