document.addEventListener('DOMContentLoaded', () => {}


// Legend  
      // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const squares = [];

  // draw the grid and render it

  function createBoard() {
    for (let i=0; i < layout.length; i++) {
      const square = document.createElement('div');
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if(layout[i] === 0) {
        squares[i].classList.add('pac-dot');
         } else if (layout[i] === 1) {
           squares[i].classList.add('wall');
          } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
          }
    }
  }