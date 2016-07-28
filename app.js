// // DARK THEME //

var darkTheme = document.getElementById("darkThemeBox")

darkTheme.addEventListener("click", function(){
    document.body.classList.toggle("darkTheme");
});



// // LARGE TEXT TOGGLE //

var largeText = document.getElementById("largeTextBox")

largeText.addEventListener("click", function(){
    document.body.classList.toggle("largeText");
});

var Chatty = (function (boardHandler) {
// Importing the default five messages from JSON document IIFE //

boardHandler.populateBoard = function(message) {


  var arrayOfMessages = [];
  message.forEach(function (currentMessage) {

    var currentTime = new Date();

    var output = currentMessage.message;

    board.innerHTML += ( `
      <div id="${currentTime}">
        <p>${output}</p><button id="${currentTime}" value="delete" class="btn btn-default kill">Delete</button>
        <br> <br>
      </div>`)

    })
  return arrayOfMessages
  }
  return boardHandler


  }) (Chatty || {})
