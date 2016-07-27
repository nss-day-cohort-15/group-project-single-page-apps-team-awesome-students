console.log('hey')

var darkTheme = document.getElementById("darkThemeBox")

darkTheme.addEventListener("click", function(){
    document.body.classList.toggle("darkTheme");
});







// document.getElementById("inlineCheckbox1").addEventListener("click", function onClick() {
//     this.removeEventListener("click", onClick);

//     this.style.backgroundColor = "white";
// }, false);


// function changeColor(value)
// {
//     var color = document.body.style.backgroundColor;
//     switch(value)
//     {
//         case 'dark':
//             color = "black";
//         break;
//     }
//     document.body.style.backgroundColor = color;
// }
// function changeColor(value)
// {
//     var color = document.body.style.backgroundColor;
//     switch(value)
//     {
//         case 'dark':
//             color = "black";
//         break;
//     }
//     document.body.style.backgroundColor = color;
// }
// function changeColor(value) {
//   document.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red";
// });
// }

