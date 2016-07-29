Chatty = (function (createMessage) {

// Saved message logs
  var savedMessages = [];

// Read logs
  createMessage.readLogs = function() {
    console.log(savedMessages);
  };

//Creating Messages
  createMessage.newMessage = function(userInput) {

// Time Stamps
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();

//Add new message to saved messaged log

    savedMessages.unshift(`${currentTime} : ${userInput}`);

// combining into new message

    var editedMessage = `<div id="${currentTime}"> <p>${hour}:${minute} // ${userInput} </p>
    <button value="delete" id="${currentTime}" class="btn btn-default kill"> Delete </button>
    </div>`;

    return editedMessage
  };

return createMessage

})(Chatty ||{})
