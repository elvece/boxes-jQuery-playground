
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

// Shorthand for $( document ).ready()
$(function() {
  console.log( "ready-short!" );
});

//exercise 2
$(function() {

//makes secretbox background white
  $("#secretBox").css("background", "white");
//creates the text of the inside of the secret box h1 element and styles it black
  $("#secretBox").html("<h1>Secret Box!</h1>").css("color", "black");
//sets the class attribute of the children of row1 to boxType3
  $("#row1").children().attr("class", "box boxType3");
//gets the last box of the last row and hides it
  $("#row4 div:last-child").css("display", "none");
//sets the background to white of all boxType1 classes
  $(".boxType1").css("background", "white");
//changes the width size of any box that is not the secretbox; does not affect rows
  $(".box").not("#secretBox").css("width", "2px");

});


//exercise 3
$(function(){
//when the container div is clicked, log the location of the mouse
  $("#container").on("click", function(event) {
    console.log(event.pageX, event.pageY);
  });
//for the elements with class boxType1, add a link to galvanize
  $(".boxType1").append('<a href="https://www.galvanize.com">Galvanize</a>');
//when link is clicked in these boxes, prevent the default page action and alert the use that you cannot leave the page
  $(".boxType1 a" ).on("click", function(event){
    event.preventDefault();
    alert("You cannot leave the page!");
  });
//when an element with the box class is clicked, check to see if image, if not append image. Can also use prevent default and toggleClass

  $(".box").on("click", function(){
    if ($(this).has('img').length) {
      $(this).find('img').remove();
    }
    else {
      $(this).append('<img src="http://puppydogweb.com/gallery/puppies/labradorretriever2.jpg" alt="cute puppy" width="100%">');
    }
  });
//creates a variable to accesss the element with id container
  var container = $('#container');
//when container is clicked, remove the styles from the div with the class box; if the targeted event is the div with class box, change the containers background to black and the targeted events calss(the div with class box) to white, otherwise, change the containers background to limegreen
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
