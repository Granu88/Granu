$(function () {

  var progressBar = $('[data-progress-bar]');

  progressBar.each(function () {
    var element = $(this);
    var maxWidth = element.data('progressBar');

    setInterval(function () {
      var width = parseInt(element[0].style.getPropertyValue('width'))

      if (width >= maxWidth) {
        element.css('width', 0)
      } else {
        element.css('width', maxWidth + '%') //width + 5 + '%'
      }
    }, 1000);
  });


});
