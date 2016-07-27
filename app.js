///////////////////////////////////////////////////////////
// DARK THEME
///////////////////////////////////////////////////////////
console.log('hey')

var darkTheme = document.getElementById("darkThemeBox")

darkTheme.addEventListener("click", function(){
    document.body.classList.toggle("darkTheme");
});

///////////////////////////////////////////////////////////
// Clear Message Board Button
///////////////////////////////////////////////////////////

var clearAllButton = document.getElementById("clearAllButton");

clearAllButton.addEventListener("click", clearAll)

function clearAll () {
  document.innerHTML.getElementById("clearAllButton") = "There are no messages to show right now.";
}

///////////////////////////////////////////////////////////
// Importing the default five messages from JSON document
///////////////////////////////////////////////////////////

var board = document.querySelector('#board')

var xhr = new XMLHttpRequest()
xhr.open('GET', 'initialMessages.json')
xhr.addEventListener('load', didLoadData)
xhr.send()

function didLoadData () {
  var message = JSON.parse(xhr.responseText)

  message.forEach(function (currentMessage) {
    var output = currentMessage.message
    board.innerHTML += `
      <div>
        <p id="clearAllButton">${output}</p><button value="delete" class="btn btn-default" id="clearAllButton">Delete</button>
        <br> <br>
      </div>`
  })
}





