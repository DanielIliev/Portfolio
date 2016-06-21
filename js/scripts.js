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

  /* Hide menu on button click in mobile view */
  $('.nav a').on('click', function() {
    var current_width = window.innerWidth;
    if (current_width < 768) {
      $('.btn-navbar').click(); //bootstrap 2.x
      $('.navbar-toggle').click(); //bootstrap 3.x
    }
  });

  /* Pages ids for on scroll events */
  ids = ['#home-page', '#models-page', '#about-page', '#testimonial-page'];
  iterator = 0;
  $('#models-page, #about-page, #testimonial-page').hide(); //Hide all pages beside home
  function checkIteratorSize(val) {
    if (val > ids.length - 1) val = 0;
    if (val < 0) val = ids.length - 1;
    return val;
  }

  /* Change active class based on current page on scroll */
  linkids = ['#homelink', '#modelslink', '#aboutlink', '#testimoniallink'];
  function changeActiveClass(curr_page) {
    var temp = 0; // Iterator for removal of active class on all buttons
    for (temp = 0; temp < linkids.length; temp++) {
      $(linkids[temp]).removeClass('active');
    }
    $(linkids[curr_page]).addClass('active');
  }

  /* Handler for button click navigation - not done */

  /* Handler for scroll navigation - Firefox */
  var timer;
  $(window).bind('DOMMouseScroll', function(e) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      if (e.originalEvent.detail > 0) {
        $(ids[iterator]).hide();
        iterator += 1;
        iterator = checkIteratorSize(iterator);
        $(ids[iterator]).fadeIn('slow');
        changeActiveClass(iterator);
      }
      else {
        $(ids[iterator]).hide();
        iterator -= 1;
        iterator = checkIteratorSize(iterator);
        $(ids[iterator]).fadeIn('slow');
        changeActiveClass(iterator);
      }
    }, 250);
  });

  /* Handler for scroll navigation - Chrome, Opera, IE */
  $(window).bind('mousewheel', function(e) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      if (e.originalEvent.wheelDelta < 0) {
        $(ids[iterator]).hide();
        iterator += 1;
        iterator = checkIteratorSize(iterator);
        $(ids[iterator]).fadeIn('slow');
        changeActiveClass(iterator);
      }
      else {
        $(ids[iterator]).hide();
        iterator -= 1;
        iterator = checkIteratorSize(iterator);
        $(ids[iterator]).fadeIn('slow');
        changeActiveClass(iterator);
      }
    }, 250);
  });

}); // Closure of main function
