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

$("#submitCof").click(function(){
	var coffee = {
	size: null,
	caffeine: null,
	type: null,
	shots: null,
	sugar: null,
	payment: null,
	collection: null,
	status: null,
	}

coffee.size = $('input:radio[name=size]:checked').val();
coffee.caffeine = $('input:radio[name=caffeine]:checked').val();

coffee.type = $('input:checkbox[name=type]:checked').val();

coffee.shots = $('input:radio[name=shots]:checked').val();
coffee.sugar = $('input:radio[name=sugar]:checked').val();
coffee.payment = $('input:radio[name=cc]:checked').val();
coffee.collection = $('input:radio[name=collection]:checked').val();
coffee.status = "Waiting in Line";

console.log(coffee);
data.child("coffees").push(coffee);
});

$("#submitOther").click(function(){
	var other = {
	juices: null,
	water: null,
	softdrinks: null,
	}

	//how to fix it so the empty ones just get ignored, the selected ones get pushed through
	
other.juices = $('input:checkbox[name=juices]:checked').val();
other.water = $('input:checkbox[name=water]:checked').val();
other.softdrinks = $('input:checkbox[name=softdrinks]:checked').val();
other.status = "Waiting in Line";

console.log(other);
data.child("others").push(other);
});


function calculateTotalPrice() {
	var typePrice = $('input:radio[name=size]:checked').data('price');

	return 3;  // supposed to be the actual total price
}
