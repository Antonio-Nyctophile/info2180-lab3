document.addEventListener('DOMContentLoaded',function(){

 const board=document.querySelector("#board");

 const boxes=board.querySelectorAll("div");


  boxes.forEach(function(box){box.classList.add("square")});
 });
 
 