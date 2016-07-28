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
	      var addToJson = thing.newMessage(userInput);
	      console.log(addToJson)
	    }
	   }
	  };
	document.getElementById('userInput').addEventListener("keypress", enter);
return thing

})( Chatty || {})
Chatty.didLoadData()
