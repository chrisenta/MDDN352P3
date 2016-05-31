 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCsBdznl52KPtIWox0HFQjsKcytKc3qAG8",
    authDomain: "te-papa-cafe.firebaseapp.com",
    databaseURL: "https://te-papa-cafe.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

  var data = firebase.database().ref();

	data.on("value", function(snapshot) {
		var context = snapshot.val();
  		console.log(context);

		var source = $("#home-template").html();
		var template = Handlebars.compile(source);
		var html = template(context);

		 console.log(html);
		 $("#yield").html(html);
	});



    $( function () {
      $( '.cropimage' ).each( function () {
        var image = $(this),
            cropwidth = image.attr('cropwidth'),
            cropheight = image.attr('cropheight'),
            results = image.next('.results' ),
            x       = $('.cropX', results),
            y       = $('.cropY', results),
            w       = $('.cropW', results),
            h       = $('.cropH', results),
            download = results.next('.download').find('a');

          image.cropbox( {width: cropwidth, height: cropheight, showControls: 'auto' } )
            .on('cropbox', function( event, results, img ) {
              x.text( results.cropX );
              y.text( results.cropY );
              w.text( results.cropW );
              h.text( results.cropH );
              download.attr('href', img.getDataURL());
            });
      } );

      $('#select').on('change', function () {
          var size = parseInt(this.value);
          $('.cropimage').each(function () {
            $(this).cropbox({width: size, height: size})
          });
      });

    } );
  