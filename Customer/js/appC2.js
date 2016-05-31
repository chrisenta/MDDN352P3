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

//Cropbox plugin

$('.cropimage').cropbox({
  width: 500,
  height: 500,
  showControls: 'auto'
}).on('cropbox', function(event, results, img) {
  console.log(results);
});


//Map tabs
$(document).ready(function(){
    $("a.tab").click(function () {
        $(".active").removeClass("active");
           $(this).addClass("active");
           $(".content").slideUp();

           var content_show = $(this).attr("title");
           $("#"+content_show).slideDown();
    });
});