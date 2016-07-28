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


// Clear Message Board Button //


var button = document.getElementById('clearAllButton');
button.onclick = function() {
    var div = document.getElementById('board');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};



// Importing the default five messages from JSON document IIFE //

boardHandler.populateBoard = function(message) {


  var arrayOfMessages = [];
  message.forEach(function (currentMessage) {

    var output = currentMessage.message

    board.innerHTML += ( `
      <div>
        <p>${output}</p><button value="delete" class="btn btn-default">Delete</button>
        <br> <br>
      </div>`)

    })
return arrayOfMessages
}
return boardHandler


  }) (Chatty || {})
