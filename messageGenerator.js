// Importing the default five messages from JSON document IIFE //
var Chatty = (function (boardHandler) {

  boardHandler.populateBoard = function(message) {

    message.forEach(function (currentMessage) {

      var currentTime = new Date();

      var output = currentMessage.message;

      board.innerHTML += ( `
        <div id="${currentTime}">
          <p>${output}</p>
          <button id="${currentTime}" value="delete" class="btn btn-default kill">Delete</button>
        </div> `)

    })
  }

return boardHandler


})(Chatty || {})
