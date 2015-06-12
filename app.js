(function ( $ ) {
  $( window ).load( function () {
    var $scssData = '';
    $.get( '_flag.scss', function ( $Data ) {
      $scssData += $Data;
      $.get( 'app.scss', function ( $data ) {
        $scssData += $data.split( "\n" ).slice( 1 ).join( "\n" );
        $.ajax( {
          url: "http://alloy.divshot.com/compile", type: "POST", dataType: "text", data: {
            compress: true, type: "scss", source: $scssData
          }, success: function ( css ) {
            $( 'body' ).append( '<link rel="stylesheet" href="data:text/css;base64,' + btoa( css ) + '"/>' );
          }
        } );
      } );
    } );
  } );
})( jQuery );
