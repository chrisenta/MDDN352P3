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

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

//All the Buttons -- COFFEE

function completeC(element){
	var id = element.getAttribute('data-key');
	data.child('coffees/' + id).remove();
}

function makingC(element){
	var id = element.getAttribute('data-key');
	data.child('coffees/' + id).update({
		status: "Making"
	});
}

function readyPickupC(element){
	var id = element.getAttribute('data-key');
	data.child('coffees/' + id).update({
		status: "Ready for Pickup"
	});
}

function readyDeliveryC(element){
	var id = element.getAttribute('data-key');
	data.child('coffees/' + id).update({
		status: "On its way!"
	});
}

//All the Buttons -- TEA

function completeT(element){
	var id = element.getAttribute('data-key');
	data.child('teas/' + id).remove();
}

function makingT(element){
	var id = element.getAttribute('data-key');
	console.log(data);
	data.child('teas/' + id).update({
		status: "Preparing"
	});
}

function readyPickupT(element){
	var id = element.getAttribute('data-key');
	data.child('teas/' + id).update({
		status: "Ready for Pickup"
	});
}

function readyDeliveryT(element){
	var id = element.getAttribute('data-key');
	data.child('teas/' + id).update({
		status: "On its way!"
	});
}

//All the Buttons -- OTHERS

function completeO(element){
	var id = element.getAttribute('data-key');
	data.child('others/' + id).remove();
}

function makingO(element){
	var id = element.getAttribute('data-key');
	console.log(data);
	data.child('others/' + id).update({
		status: "Preparing"
	});
}

function readyPickupO(element){
	var id = element.getAttribute('data-key');
	data.child('others/' + id).update({
		status: "Ready for Pickup"
	});
}

function readyDeliveryO(element){
	var id = element.getAttribute('data-key');
	data.child('others/' + id).update({
		status: "On its way!"
	});
}