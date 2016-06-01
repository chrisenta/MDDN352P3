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

	}

coffee.size = $('input:radio[name=size]:checked').val();
coffee.type = $('input:radio[name=type]:checked').val();
coffee.extras = $('input:checkbox[name=extras]:checked').map(function(_, el) {
    return $(el).val();
}).get();
coffee.payment = $('input:radio[name=cc]:checked').val();
coffee.collection = $('input:radio[name=collection]:checked').val();
coffee.status = "Waiting in Line";

if(coffee.extras == null){delete coffee.extras}

console.log(coffee);
data.child("coffees").push(coffee);
});

$("#submitTea").click(function(){
	var tea = {
	}

tea.tea = $('input:radio[name=tea]:checked').val();
tea.extras = $('input:checkbox[name=extras]:checked').map(function(_, el) {
    return $(el).val();
}).get();
tea.payment = $('input:radio[name=cc]:checked').val();
tea.collection = $('input:radio[name=collection]:checked').val();
tea.status = "Waiting in Line";


if(tea.extras == null){delete tea.extras}

console.log(tea);
data.child("teas").push(tea);
});

$("#submitOther").click(function(){
	var other = {
	}

other.other = $('input:checkbox[name=other]:checked').map(function(_, el) {
    return $(el).val();
}).get();
other.payment = $('input:radio[name=cc]:checked').val();
other.collection = $('input:radio[name=collection]:checked').val();
other.status = "Waiting in Line";

console.log(other);
data.child("others").push(other);
});


function calculateTotalPrice() {
	var sizePrice = $('input:radio[name=size]:checked').data('price');
	var typePrice = $('input:radio[name=type]:checked').data('price');
	var collectionPrice = $('input:radio[name=collection]:checked').data('price');
	
	var extraPrice = 0;
	$('input:checkbox[name=extras]:checked').each(function () {
	  extraPrice += $(this).data('price');
	});

	return sizePrice + typePrice + collectionPrice + extraPrice;  // supposed to be the actual total price
}

function calculateTeaPrice() {

	var teaPrice = $('input:radio[name=tea]:checked').data('price');
	var collectionPrice = $('input:radio[name=collection]:checked').data('price');

	var extraPrice = 0;
	$('input:checkbox[name=extras]:checked').each(function () {
	  extraPrice += $(this).data('price');
	});

	return teaPrice + collectionPrice + extraPrice;  // supposed to be the actual total price
}


function calculateOtherPrice() {

	var collectionPrice = $('input:radio[name=collection]:checked').data('price');
	var otherPrice = 0;
	$('input:checkbox[name=other]:checked').each(function () {
	  otherPrice += $(this).data('price');
	});

	return collectionPrice + otherPrice;  // supposed to be the actual total price
}
//calculateTeaPrice

$('input').change(function(){
        var price = calculateTotalPrice();
      	$('#costTotal').text('Total Cost: $' + price);

      	// do again for tea
      	var teaPrice = calculateTeaPrice();
      	$('#teaCostTotal').text('Total Cost: $' + teaPrice);

      	// do again for water/juce
      	var otherPrice = calculateOtherPrice();
      	$('#otherCostTotal').text('Total Cost: $' + otherPrice);
 });$


