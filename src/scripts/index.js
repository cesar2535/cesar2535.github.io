(function () {
  if ($('#signature').length > 0) {
    var signature = new Vivus('signature', {type: 'oneByOne', duration: 200}, function (event) {
      $('#signature path').css('fill', '#fff');
    });
  }
})();