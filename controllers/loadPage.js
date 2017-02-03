$(document).ready(function(){
  // Set trigger and container variables
  var trigger = $('.Article__content a, .Article__footer a'),
      container = $('body');

  // Fire on click
  trigger.on('click', function(){
    // Set $this for re-use. Set target from data attribute
    var $this = $(this),
      target = $this.data('target');

    // Load target page into container
    container.load(target + '.html');
    $(window).scrollTop(0);

    // Stop normal link behavior
    return false;
  });
});
