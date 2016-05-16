	var data = new Firebase("https://te-papa-cafe.firebaseio.com/");


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





