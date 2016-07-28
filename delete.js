// Clear Message Board Button //
Chatty = (function (deleting) {

  deleting.deleteAll = function(evt) {

    var board = document.getElementById('board');

    board.innerHTML = " ";

};

// Clear Self
  deleting.deleteSelf = function(evt) {
  	var toDelete = document.getElementById(event.target.id);
  	toDelete.remove();
  }

return deleting
})( {} )
