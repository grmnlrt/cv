$(document).ready(function(){
  $('.menu-content .menu-toggle').on('click', function(){
    $('.menu-content').toggleClass('on');
    $(this).toggleClass('on');
  });
});
