Chatty = (function (createMessage) {

  createMessage.newMessage = function(userInput) {

// Time Stamps
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();

// Saved message logs
    var savedMessages = [];

//Add new message to saved messaged log
    savedMessages.push(`${currentTime} : ${userInput}`);

// combining into new message

    var editedMessage = `<div> ${hour}:${minute} // ${userInput} <div> <br> <br>`;

    console.log(savedMessages, editedMessage)

    return editedMessage
  };

    return createMessage
})({} )






