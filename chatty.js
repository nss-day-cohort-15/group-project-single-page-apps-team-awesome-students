var Chatty = (function (thing) {

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

// IIFE #3, removing items from the JSON
  var deleteButton = document.getElementById('deleteButton');
  var deleteAll = document.getElementById('clearAllButton');

   function runDeleteAll(evt) {
   	var board = document.getElementById("board").innerHTML;
   	console.log(board);
    thing.deleteAll();
  };

  // function runDeleteButton (evt) {

  // };


  // deleteButton.addEventListener('click', runDeleteButton);
  deleteAll.addEventListener('click', runDeleteAll);

})(Chatty)
