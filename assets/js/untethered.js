$(document).ready(function(){
  
  // remove ugly &nbsp; from html
  $('.post-content').html(function(i,h){
      console.log('found one');
      return h.replace(/&nbsp;/g,'');
  });  
  
  // submit form on click
  $('form .btn').on('click', function(e){
    e.preventDefault();
    console.log('click');
    $(this).closest('form').submit();
  });
  
});