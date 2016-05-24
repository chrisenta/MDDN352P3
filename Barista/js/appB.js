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
	console.log(data);
	data.child('coffees/' + id).update({
		status: "Making"
	});

	// firebase.database().ref('users/' + userId).set({
 //    username: name,
 //    email: email
 //  });
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

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

