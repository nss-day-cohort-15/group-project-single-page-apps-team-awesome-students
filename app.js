// document.getElementById("deleteAll").addEventListener("click", deleteAll)

// function deleteAll () {
//   document.innerHTML.getElementById("deleteAll") = "There are no messages to show right now.";
// }


var board = document.querySelector('#board')

var xhr = new XMLHttpRequest()
xhr.open('GET', 'initialMessages.json')
xhr.addEventListener('load', didLoadData)
xhr.send()

function didLoadData () {
  var message = JSON.parse(xhr.responseText)
  console.log(message[0]);

  message.forEach(function (currentMessage) {
    var output = currentMessage.message
    board.innerHTML += `
      <div>
        <p>${output}</p><button value="delete">Delete</button>
      </div>`
  })
}
