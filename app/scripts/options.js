(function($) {
  'use strict';

  var inputs = $('form#options input');

  // restore options
  inputs.each(function(i, input) {
    var $input = $(input);
    $input.val(localStorage[input.id]);
  });

  // store options
  $('#save').on('click', function(e) {
    e.preventDefault();

    inputs.each(function(i, input) {
      var $input = $(input);
      localStorage[input.id] = $input.val();
    });

    // update proxy configuration
    delegator.proxy.initialize();

    var alert = $('#saved-alert');

    alert.show();

    setTimeout(function() {
      alert.hide();
    }, 2500);
  });

})(jQuery);
