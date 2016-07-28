
// console.log("the script tag is good")
// console.log('hey')


// // DARK THEME //

// var darkTheme = document.getElementById("darkThemeBox")

// darkTheme.addEventListener("click", function(){
//     document.body.classList.toggle("darkTheme");
// });



// // LARGE TEXT TOGGLE //

// var largeText = document.getElementById("largeTextBox")

// largeText.addEventListener("click", function(){
//     document.body.classList.toggle("largeText");
// });


// // Clear Message Board Button //


// var clearAllButton = document.getElementById("clearAllButton");

// clearAllButton.addEventListener("click", clearAll)

// function clearAll () {
//   document.innerHTML.getElementById("clearAllButton") = "There are no messages to show right now.";
// }


// // Importing the default five messages from JSON document IIFE //

// funtion showInitalMessages () {
// var board = document.querySelector('#board')

// var xhr = new XMLHttpRequest()
// xhr.open('GET', 'initialMessages.json')
// xhr.addEventListener('load', didLoadData)
// xhr.send()

// return{
//   getInitalMessages: funtion () {

//   }
// }

// function didLoadData () {
//   var message = JSON.parse(xhr.responseText)

// }}


// message.forEach(function (currentMessage) {
//     var output = currentMessage.message
//     board.innerHTML += `
//       <div>
//         <p id="clearAllButton">${output}</p><button value="delete" id="clearAllButton" class="btn btn-default">Delete</button>
//         <br> <br>
//       </div>`
//   })

