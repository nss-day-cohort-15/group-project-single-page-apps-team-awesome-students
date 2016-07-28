///////////////////////////////////////////////////////////
// DARK THEME
///////////////////////////////////////////////////////////
console.log('hey')

var darkTheme = document.getElementById("darkThemeBox")

darkTheme.addEventListener("click", function(){
    document.body.classList.toggle("darkTheme");
});


///////////////////////////////////////////////////////////
// LARGE TEXT TOGGLE
///////////////////////////////////////////////////////////
var largeText = document.getElementById("largeTextBox")

largeText.addEventListener("click", function(){
    document.body.classList.toggle("largeText");
});


///////////////////////////////////////////////////////////
// Clear Message Board Button
///////////////////////////////////////////////////////////

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
        <p id="deleteMessageText">${output}</p>
        <button value="delete" class="btn btn-default delete" id="deleteMessageButton">Delete</button>
        <br> <br>
      </div>`
  })
}



