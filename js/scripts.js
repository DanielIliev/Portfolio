$(function() {

  /* Smooth scroll implementation */
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

  /* Change class active, based on clicked button in navigation */
  $('.nav a').on('click', function() {
    var current_width = window.innerWidth;
    if (current_width < 768) {
      $('.btn-navbar').click(); //bootstrap 2.x
      $('.navbar-toggle').click(); //bootstrap 3.x
    }
  });

  /* Pages ids for on scroll events */
  ids = ['#home-page', '#models-page', '#about-page'];
  iterator = 0;
  $('#models-page, #about-page').hide();
  function checkIteratorSize(val) {
    if (val > ids.length - 1) val = 0;
    if (val < 0) val = ids.length - 1;
    return val;
  }

  /* On scroll page loading */
  var timer;
  $(window).bind('DOMMouseScroll', function(e) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      if (e.originalEvent.detail > 0) {
        $(ids[iterator]).hide();
        iterator += 1;
        iterator = checkIteratorSize(iterator);
        $(ids[iterator]).fadeIn('slow');
      }
      else {
        $(ids[iterator]).hide();
        iterator -= 1;
        iterator = checkIteratorSize(iterator);
        $(ids[iterator]).fadeIn('slow');
      }
    }, 250);
  });
  /* Closure of scroll function for Firefox */

  $(window).bind('mousewheel', function(e) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      if (e.originalEvent.wheelDelta < 0) {
        $(ids[iterator]).hide();
        iterator += 1;
        iterator = checkIteratorSize(iterator);
        $(ids[iterator]).fadeIn('slow');
      }
      else {
        $(ids[iterator]).hide();
        iterator -= 1;
        iterator = checkIteratorSize(iterator);
        $(ids[iterator]).fadeIn('slow');
      }
    }, 250);
  }); /* Closure of scroll function for other browsers */

}); // Closure of main function
