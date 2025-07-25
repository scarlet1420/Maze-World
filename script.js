const layout = [
  'W','W','W','W','W','W','W',
  'W',' ',' ',' ',' ',' ','W',
  'W',' ','W','W','W',' ','W',
  'W','P','W','G',' ',' ','W',
  'W','W','W','W','W','W','W'
  ];

let playerPosition = layout.indexOf("P");
 
const maze = document.getElementById("maze"); 

function makeMaze() {
  maze.innerHTML = ' ';
  layout.forEach((cell, index) => { 
    const div = document.createElement('div');
   if (cell === 'W') {
     div.classList.add('wall');
   }
  if (cell === 'P'){
     div.classList.add('player');
     div.textContent = '😛';
   }
  if (cell === 'G'){
    div.classList.add('goal');
    div.textContent = '🔮';
  }

  maze.appendChild(div);

});
  
}
makeMaze();
const width = 7;
function movePlayer(direction){
  let targetindex = playerPosition;
  
  if (direction === "ArrowUp"){
    targetindex-= width;
  }
  if (direction === 'ArrowDown'){
    targetindex += width;
  }
   if (direction === "ArrowRight"){
    targetindex += 1;
   }
   if (direction === "ArrowLeft"){
    targetindex -= 1;
   }
  
   if (layout[targetindex] !== 'W' && targetindex >= 0 && targetindex < layout.length){ 
    if (layout[targetindex] === 'G'){
        document.getElementById("message").textContent = "😉You won🌸!!";
    }  
     
    layout[playerPosition] = '';
    layout[targetindex] ='P';
    playerPosition=targetindex;
    makeMaze();
  }
}
document.addEventListener("keydown", (e) => {
  movePlayer(e.key);
});
  
