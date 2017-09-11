$(function(){
  $('#menu, [data-type="close"]').click(function(e){
    e.preventDefault()
    $('.bottom_menu').slideToggle()
  })

  // $(window).resize(function() {
  //   if ($(window).width() > 480 && $('.navbar').is(':hidden')) {
  //     $('.navbar').removeAttr('style')
  //   }
  // )}
})
