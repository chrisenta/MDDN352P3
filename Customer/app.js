//our firebase reference

var data = new Firebase('https://tepaparating.firebaseio.com/');

//on change get data
data.on("value", function(snapshot) {
  context = snapshot.val();

var source = $("#home-template").html ();
var template = Handlebars.compile(source);
var html = template(context);

console.log(html);
$("#yield").html(html);

});


//Event method
//$=jquery select
$("#submit").click(function(){

$(".reset").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});



var exhibition = {
Rating: null,
Comments: null, 
Suggestions: null

}

exhibition.Rating = $("#Rating").val();
exhibition.Comments = $("#Comments").val();
exhibition.Suggestions = $("#Suggestions").val();


data.child("exhibition").push(exhibition);


});

$("#submit").on("click", function () {
    if ($("#fileName").val() === '') {
        alert("please selct a file");
    } else {
        alert("successfully uploaded");
        $('#fileName').replaceWith($('#fileName').val('').clone(true));
    }
});










