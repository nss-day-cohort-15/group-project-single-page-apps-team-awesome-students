// // DARK THEME //

var darkTheme = document.getElementById("darkThemeBox");

darkTheme.addEventListener("click", function(){
    document.body.classList.toggle("darkTheme");
});



// // LARGE TEXT TOGGLE //

var largeText = document.getElementById("largeTextBox");

largeText.addEventListener("click", function(){
    document.body.classList.toggle("largeText");
});

function marqMemeLord(e) {
  var marquee = document.querySelector("#marquees");
  var userInput = document.querySelector("#userInput").value;

  if (!userInput && (13 == e.keyCode)) {
  	console.log("Why are you trying to post without text?!?!?!");
  	return

  } else if (13 == e.keyCode) {

			if (marquees.childElementCount >= 0 && marquees.childElementCount <= 1) {
		      marquees.innerHTML = marquees.innerHTML + `<marquee class="horribleMarquee">
		      "W0W Great Messaging!! Keep up the good work!!"</marquee>`

// Lame ending
      } else {
         return
      }
   }
}




// BREAK IN CASE OF EMERGENCY


// 		  } else if (marquees.childElementCount >= 2 && marquees.childElementCount <= 5) {
// 		  	marquees.innerHTML = marquees.innerHTML + `<div> </div`;
// 		  	console.log("Great post!")

// 		  } else if (marquees.childElementCount >= 6 && marquees.childElementCount <= 9) {
// 		  	marquees.innerHTML = marquees.innerHTML + `<div> </div`;
// 	   	console.log("You are provoking the marqmeme lord with your constant messaging, this is a warning")

// 		  } else if (marquees.childElementCount >= 10 && marquees.childElementCount <= 13) {
// 		  	marquees.innerHTML = marquees.innerHTML + `<div> </div`;
// 		  	console.log("Seriously dude cut out your shit posting")

// 		  } else if (marquees.childElementCount >= 14 && marquees.childElementCount <= 35) {
// 		  	console.log("This is a just punishment")
// 		  	marquees.innerHTML = marquees.innerHTML + `<marquee class="theWorstMarquee">
// 	       "See what you've done? You asked for this"</marquee>`

// 		  } else if (marquees.childElementCount >= 36) {
// 	   	console.log("I am all out of marq-memes, you need help")
// 	 }
//   }
// }

document.getElementById('userInput').addEventListener("keypress", marqMemeLord);




