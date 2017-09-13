$(function(){
  $('#menu').click(function(e){
    e.preventDefault()
    $('.navbar').slideToggle()
  })

  $('.slideshow').each(function() {
    var $container    = $(this),
        $slideGroup   = $container.find('.slideshow-slides'),
        $slides       = $slideGroup.find('.slide'),
        $nav          = $container.find('.slideshow-nav'),
        $indicator    = $container.find('.slideshow-indicator'),
        slideCount    = $slides.length,
        indicatorHtml = '',
        currentIndex  = 0,
        duration      = 500,
        easing        = 'Ease',
        interval      = 7500,
        timer;

    $slides.each(function(i) {
      $(this).css({ left: 100 * i + '%'})
      indicatorHtml += '<a href="#">' + (i + 1) + '</a>'
    })
    $indicator.html(indicatorHtml)

    function goToSlide(index) {
      $slideGroup.animate({ left: -100 * index + '%' },duration)
      currentIndex = index;
      updateNav();
    }

    function updateNav() {
      var $navPrev = $nav.find('.prev'),
          $navNext = $nav.find('.next');

      if (currentIndex === 0) {
        $navPrev.addClass('disabled')
      } else {
        $navPrev.removeClass('disabled')
      }
      if (currentIndex === slideCount - 1) {
        $navNext.addClass('disabled')
      } else {
        $navNext.removeClass('disabled')
      }
      $indicator.find('a').removeClass('active')
                          .eq(currentIndex).addClass('active')
    }

    $nav.on('click', 'a', function(e) {
      e.preventDefault();
      if ($(this).hasClass('prev')) {
        goToSlide(currentIndex - 1)
      } else {
        goToSlide(currentIndex + 1)
      }
    })
    $indicator.on('click', 'a', function(e) {
      e.preventDefault();
      goToSlide($(this).index())
    })

    function startTimer() {
      timer = setInterval(function() {
        var nextIndex = (currentIndex + 1) % slideCount
        goToSlide(nextIndex)
      }, interval)
    }
    function stopTimer() {
      clearInterval(timer)
    }

    $container.on({
      mouseenter: stopTimer,
      mouseleave: startTimer
    })

    goToSlide(currentIndex)
    startTimer()
  })

  // $(window).resize(function() {
  //   if ($(window).width() > 480 && $('.navbar').is(':hidden')) {
  //     $('.navbar').removeAttr('style')
  //   )
})
