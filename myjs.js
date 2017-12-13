$(window).onload=function(){
    $('nav a').on('click', function() {
      var scrollAnchor = $(this).attr('data-scroll'),
      scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;
      $('body,html').animate({
        scrollTop: scrollPoint
      }, 500);
    return false;
})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('nav').addClass('fixed');
        $('.wrapper section').each(function(i) {
            if ($(this).position().top <= windscroll - 20) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

    } else {

        $('nav').removeClass('fixed');
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active');
    }

}).scroll();}
