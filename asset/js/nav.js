$(function(){
  $('#menu_div').click(function(e){
    e.preventDefault()
    $('.bar').toggleClass('animate')
    $('.navbar').slideToggle()
  })
})
