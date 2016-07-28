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
