document.addEventListener('DOMContentLoaded',function(){

 const board=document.querySelector("#board");

 const boxes=board.querySelectorAll("div");

  //use for or for each square

  boxes.forEach(function(box){box.classList.add("square")});
 });
 
 