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


function complete(element){
	var id = element.getAttribute('data-key');
	data.child('coffees/' + id).remove();
}


function making(element){
	var id = element.getAttribute('data-key');
	data.child('coffees/' + id).update({
		status: "Making"
	});
}

function readyPickup(element){
	var id = element.getAttribute('data-key');
	data.child('coffees/' + id).update({
		status: "Ready for Pickup"
	});
}

function readyDelivery(element){
	var id = element.getAttribute('data-key');
	data.child('coffees/' + id).update({
		status: "On its way!"
	});
}

Handlebars.registerHelper('conditions', function (options) {
    var data = this;
    data.__check_conditions = true;
    return options.fn(this);
});


Handlebars.registerHelper('next', function(conditional, options) {
  if(conditional && this.__check_conditions) {
      this.__check_conditions = false;
      return options.fn(this);
  } else {
      return options.inverse(this);
  }
});


