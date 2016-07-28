function enter(e) {
	e.preventDefault()
    if (13 == e.keyCode) {
     newMessage()
 }
};

var newMessage = (function (message) {

  var userInput = document.querySelector("#newMessage").value;
  console.log(userInput);

   if (!userInput) {
    return alert("You have to enter a message!");
  };

// Delete Button
  // var deleteButton = `<button id="deleteButton"> Delete Message </button>`;
  // deleteButton.addEventListener("click", function(evt) {

  // });

// Time Stamps
  var currentTime = new Date();
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();

// Saved message logs
  var savedMessages = [];

//Add new message to saved messaged log
savedMessages.push(`${currentTime} : ${userInput}`);

// add new message to board



     console.log('hello');

  	 savedMessages.push(`${currentTime} : ${userInput}`);

     var board = document.querySelector("#board");

     board.innerHTML += `<div> ${hour}:${minute} // ${userInput} deleteButton <div> <br> <br>`;

     console.log( savedMessages, board)

    return message
})()






