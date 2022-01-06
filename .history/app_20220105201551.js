document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid"); // pick up class name of grid using querySelector
  const scoreDisplay = document.getElementById("score"); //  do the same as above but pick up Id using score
  const width = 28; //28 x 28 = 784 squares

  // layout of grid and what is in the squares

  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];


  //Legend
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const squares = [];

  //draw the grid and render it

  function createBoard() { // function called createBoard
    for (let i = 0; i < layout.length; i++) { // use length of the layout array and loop over it to render a grid in my browser
      const square = document.createElement("div"); // use createElement to create a div for all 7 of the 84 squares
      grid.appendChild(square); // put these squares in our grid using appendChild
      squares.push(square); // pushing all these created squares into a new array called 'squares' (empty array above)

      //add layout to the board
      if (layout[i] === 1) { 
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall"); // if first item is equal to 1 we give it a class of wall
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
    }
  }

  createBoard(); // invoke the function

  // starting position of pac-man

  // draw pacman and blinky

  let pacmanCurrentIndex = 502; // passing through a number
  squares[pacmanCurrentIndex].classList.add('pac-man'); // add a class of pacman - get pacman in the grid

  let blinkyCurrentIndex = 197; // draw blinky
  squares[blinkyCurrentIndex].classList.add('blinky');

  // get coordinates of pacman or blinky

  function getCoordinates (index) {
    return [index % width, Math.floor(index / width)]
  }

  function moveBlinky () {
    const directions =[-1, +1, +width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)];

    let ghostTimerID = NaN;

    ghostTimerID = setInterval(function(){
      if (squares[blinkyCurrentIndex + direction].classList.contains('wall')) {
        // remove ghost class
        squares[blinkyCurrentIndex].classList.remove('blinky')
        // check if the new space is closer
        const [blinkyX, blinkyY] = getCoordinates(blinkyCurrentIndex);
        const [pacmanX, pacmanY] = getCoordinates(pacmanCurrentIndex);
        const [blinkyNewX, blinkyNewY] = getCoordinates(blinkyCurrentIndex + direction);

        function isXCoordCloser () {
          if ((blinkyNEW))
        }
     
     
     
        squares[blinkyCurrentIndex].classList.add('blinky')
      } else direction = directions[Math.floor(Math.random() * directions.length)];

    }
  
moveBlinky()

  // move pac-man

  function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove("pac-man");

    switch (e.keyCode) {
      case 37:
        if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains('wall')) 
        pacmanCurrentIndex -= 1;
        break;
      case 38:
        if (pacmanCurrentIndex - width >= 0 && squares[pacmanCurrentIndex -width].classList.contains('wall')) 
        pacmanCurrentIndex -= width;
        break;
      case 39:
        if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex +width].classList.contains('wall')) 
        pacmanCurrentIndex += 1;
        break;
      case 40:
        if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex +width].classList.contains('wall'))
          pacmanCurrentIndex += width;
        break;
    }

    squares[pacmanCurrentIndex].classList.add("pac-man");

    pacDotEaten();
    //powerPelletEaten();
    //checkForGameOver()
    //checkForWin()
  }

  document.addEventListener("keyup", movePacman); // add event listener passing through keyup

  // what happens when you eat a pac-dot

  //function pacDotEaten() {
   // if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
     // score++;
     // scoreDisplay.innerHTML = score;
      //squares[pacmanCurrentIndex].classList.remove('pac-dot');
    //}
  //}

  // what happens when you eat a power-pellet

  //function powerPelletEaten() {
   // if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
     // score +=10;
     // ghosts.forEach(ghost => ghost.isScared = true);
     // setTimeout(unScareGhosts, 10000);
     // squares[pacmanCurrentIndex].classList.remove('power-pellet')
   // }
  //}
});