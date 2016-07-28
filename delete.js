// Clear Message Board Button //
Chatty = (function (deleting) {

  deleting.deleteAll = function(evt) {
    var div = document.getElementById('board');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

  deleting.deleteSelf = function(evt) {
  	var toDelete = document.getElementById(event.target.id);
  	toDelete.remove();
  }

return deleting
})( {} )
