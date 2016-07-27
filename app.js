// document.getElementById("deleteAll").addEventListener("click", deleteAll)

// function deleteAll () {
//   document.innerHTML.getElementById("deleteAll") = "There are no messages to show right now.";
// }


var board = document.querySelector('board')

var xhr = new XMLHttpRequest()
xhr.open('GET', 'initialMessages.json')
xhr.addEventListener('load', didLoadData)
xhr.send()

function didLoadData () {
  var messages = JSON.parse(xhr.responseText)
  console.log(messages);

  messages.forEach(function () {
    board.innerHTML += `
      <div>
        <p>${message.value}</p>
        <button value="delete"></button>
      </div>`
  })
}
