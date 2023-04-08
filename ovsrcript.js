$('#global-nav li:has(ul)').click(function(){
  $(this).find('> ul').slideToggle(400);
});

$('#menu_button').on('click', function() {
$(this).toggleClass('open');
});