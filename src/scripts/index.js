(function () {
  'use strict';
  
  window.sr = new scrollReveal();

  if ($('#signature').length > 0) {
    var signature = new Vivus('signature', {type: 'oneByOne', duration: 200, start: 'manual'}, function (event) {
      $('#signature path').css('fill', '#fff');
    });
    setTimeout( function () {
      $('#signature').css('visibility', 'visible');
      signature.play(0);
    }, 1000);
  }
})();