$(document).ready(function(){
  $('.menu-content .menu-toggle').on('click', function(){
    $(this).toggleClass('on');
    $('.menu-content > nav > ul').toggleClass('mask');
    $('.menu-content .home').toggle().hidden();
  });
});