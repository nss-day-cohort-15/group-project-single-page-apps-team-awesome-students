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
  xhr.send();
  }



//IIFE #2, adding a new message to the JSON
  function enter(e) {
		var userInput = document.getElementById("userInput").value;
		var board = document.getElementById("board");

    if (13 == e.keyCode) {
	    e.preventDefault()
	  if (!userInput) {
	    return alert("You need to write a message!")
	  } else {
	    board.innerHTML = Chatty.newMessage(userInput) + board.innerHTML;
      }
	  }
	};

	document.getElementById('userInput').addEventListener("keypress", enter);

// IIFE #3, removing items from the JSON

  document.querySelector("body").addEventListener("click", function(evt) {

    if (event.target.className === "btn btn-default kill") {
  		runDeleteButton()
  	} else if (event.target.id === "clearAllButton") {
  		runDeleteAll()
  	}
  });

  function runDeleteAll (evt) {
    Chatty.deleteAll();
  };

  function runDeleteButton (evt) {
    Chatty.deleteSelf()
  };

return Chatty

})(Chatty)
Chatty.didLoadData()
