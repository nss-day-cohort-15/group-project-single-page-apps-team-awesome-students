function enter(e) {
    if (13 == e.keyCode) {
     newMessage()
 }
};

var newMessage = (function (userInput) {
  var userInput = document.querySelector("newMessage").value;
  var board = document.querySelector("board");

// Delete Button
  var deleteButton = `<button id="deleteButton"> Delete Message </button>`;
  deleteButton.addEventListener("click", function(evt) {

  });

// Time Stamps
  var currentTime = new Date();
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();

// Saved message logs
  var savedMessages = [];

  if (!userInput) {
    return alert("You have to enter a message!");
  } else {
  	return {
  	  appendMessage: function () {
  	  	savedMessages.push(`${currentTime} : ${userInput}`);
        var board = document.querySelector("board").innerHTML;
        board.innerHTML += `<p> ${hour}:${minute} // ${userInput} ${deleteButton} <p> <br> <br>`;
  	  }
  	}
  };
})()
