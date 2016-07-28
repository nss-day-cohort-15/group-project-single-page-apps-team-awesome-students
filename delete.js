Chatty = (function (deleting) {

  deleting.deleteAll = function(board) {
    board.children().toggleClass("hidden");
  }

})(Chatty || { })
