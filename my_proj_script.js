
// get the button
var btn = document.querySelector("#btn1")

// select all the squares
var theBoard = document.querySelectorAll("td")


// cycle through X, O and blank
function changePiece(){

  if (this.textContent === ' ') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O'
  }else {
    this.textContent = ' ';
  }
}

// adds listeners to each square
for (var i = 0; i < theBoard.length; i++) {
  theBoard[i].addEventListener('click',changePiece);
}


// event listener on the button to clear the board
btn.addEventListener('click',function () {
  for (var i = 0; i < theBoard.length; i++) {
    theBoard[i].textContent = ' '
  }
  })
