(function($){
  $.get('app.scss',function(scssData){
    $.ajax({
      url: "http://alloy.divshot.com/compile",
      type: "POST",
      dataType: "text",
      data: {
        compress: true,
        type: "sass",
        source: scssData
      },
      success: function(css) {
        $("#cssStyle").text(css);
      }
    });
  });
})(jQuery);
