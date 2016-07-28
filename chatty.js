var Chatty = (function (thing) {

//IIFE #1 Loading from the JSON file to the DOM
thing.didLoadData = function() {

var board = document.querySelector('#board')

var xhr = new XMLHttpRequest()
xhr.open('GET', 'initialMessages.json')
xhr.addEventListener('load', function(){
  var message = JSON.parse(xhr.responseText)
	Chatty.populateBoard(message);
})
xhr.send()

}



//IIFE #2, adding a new message to the JSON
	function enter(e) {
		var userInput = document.getElementById("userInput").value;
	      if (13 == e.keyCode) {
	      e.preventDefault()
	      if (!userInput) {
	      	return alert("You need to write a message!")
	      } else {
	      var addToJson = Chatty.newMessage(userInput);
	      console.log(addToJson)
	    }
	   }
	  };
	document.getElementById('userInput').addEventListener("keypress", enter);

// IIFE #3, removing items from the JSON
  var deleteButton = document.getElementById('deleteButton');
  var deleteAll = document.getElementById('clearAllButton');

    deleteAll.addEventListener('click', runDeleteAll);

   function runDeleteAll(evt) {
   	var board = document.getElementById("board");
   	console.log(board);
    Chatty.deleteAll(board);
  };

  // function runDeleteButton (evt) {

  // };
  // deleteButton.addEventListener('click', runDeleteButton);
return Chatty
})( Chatty)
Chatty.didLoadData()

