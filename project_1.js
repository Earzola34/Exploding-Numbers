var board = [];
var rows = 8;
var columns = 8;

var minesCount = 4;
var minesLocation = []; 

var tilesClicked = 0; 

var gameOver = false;

//could not get elements in code
// window.onload = function() {
//     startGame();
// }

function startGame() {
    
    for (let r = 1; r <= rows; r++) {
        let row = [];
        for (let c = 1; c <= columns; c++) {
            
            let tile = document.createElement('div');
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            document.getElementById('board').append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);
}

function clickTile() {

    let tile = this;
    tile.classList.add("tile-clicked");
    console.log(tile);
}

function setMines() {
    for (let i = 0; i < 4; i++) {
        let mine = parseInt(Math.floor(Math.random()*8)+1) + '-' + parseInt(Math.floor(Math.random()*8)+1)
        if (minesLocation.includes(mine) == false) {
            minesLocation.push(mine);
            let bombSquare = document.getElementById(mine);
            bombSquare.innerHTML = `💣`
        }

        else {
            i--;
        }
        
    }

    // for (let i = 0; i < 4; i++) {
    //     console.log(minesLocation[i]);
        
    //     let bombSquare = document.getElementById(minesLocation[i].toString());
    //     console.log(bombSquare);
    //     bombSquare.innerText = "1";
    // }

}
startGame()
setMines()