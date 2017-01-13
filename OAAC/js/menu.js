$(document).ready(function() {
   $('.ham').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
});