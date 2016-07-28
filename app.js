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
