
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

// Shorthand for $( document ).ready()
$(function() {

  console.log( "ready-short!" );

});

//exercise 2
// $(function() {

//   $("#secretBox").css("background", "white");

//   $("#secretBox").html("<h1>Secret Box!</h1>").css("color", "black");

//   $("#row1").children().attr("class", "box boxType3");

//   $("#row4 div:last-child").css("display", "none");

//   $(".boxType1").css("background", "white");

//   $(".box").not("#secretBox").css("width", "2px");

// });


// //exercise 3
$(function(){

  // $("#container").on("click", function(event) {
  //   console.log(event.pageX, event.pageY);
  // });

  // $(".boxType1").append('<a href="https://www.google.com">Galvanize</a>');

  // $(".boxType1 a" ).on("click", function(event){
  //   event.preventDefault();
  //   alert("You cannot leave the page!");
  // });

  // $(".box").on("click", function(){
  //   if ($(this).has('img').length) {
  //     $(this).find('img').remove();
  //   }
  //   else {
  //     $(this).append('<img src="http://puppydogweb.com/gallery/puppies/labradorretriever2.jpg" alt="cute puppy" width="100%">');
  //   }
  // });

  var container = $('#container');

  container.on('click', function(event){
    $('.box').removeAttr("style");
    if ($(event.target).is('.box')) {
      container.css('background', 'black');
      $(event.target).css('background', 'white');
    }
    else {
      container.css('background', 'limegreen');
    }
  });

});
