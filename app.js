
// console.log("the script tag is good")
// console.log('hey')


// // DARK THEME //

// var darkTheme = document.getElementById("darkThemeBox")

// darkTheme.addEventListener("click", function(){
//     document.body.classList.toggle("darkTheme");
// });



// // LARGE TEXT TOGGLE //

// var largeText = document.getElementById("largeTextBox")

// largeText.addEventListener("click", function(){
//     document.body.classList.toggle("largeText");
// });


// // Clear Message Board Button //


// var clearAllButton = document.getElementById("clearAllButton");

// clearAllButton.addEventListener("click", clearAll)

// function clearAll () {
//   document.innerHTML.getElementById("clearAllButton") = "There are no messages to show right now.";
// }


// Importing the default five messages from JSON document IIFE //
var Chatty = (function (boardHandler) {

boardHandler.populateBoard = function(message) {

    var arrayOfMessages = [];
  message.forEach(function (currentMessage) {

    var output = currentMessage.message

    arrayOfMessages.unshift( `
      <div>
        <p>${output}</p><button value="delete" class="btn btn-default">Delete</button>
        <br> <br>
      </div>`)

    })
return arrayOfMessages
}
return boardHandler

  }) (Chatty || {})














