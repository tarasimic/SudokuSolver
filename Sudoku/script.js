let board = [
  [0, 4, 0, 0, 0, 0, 0, 0, 6],
  [0, 0, 0, 9, 0, 2, 4, 0, 0],
  [0, 5, 6, 4, 0, 7, 9, 0, 0],
  [0, 0, 0, 2, 0, 0, 0, 0, 0],
  [5, 9, 0, 0, 0, 0, 6, 1, 0],
  [1, 3, 2, 0, 5, 0, 0, 0, 0],
  [0, 2, 7, 0, 8, 6, 0, 0, 0],
  [9, 1, 5, 0, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 7, 0, 5, 2, 0],
];

let board1 = [
  [5, 0, 0, 0, 0, 9, 1, 0, 0],
  [0, 0, 0, 0, 6, 2, 5, 0, 8],
  [0, 1, 0, 0, 0, 8, 7, 6, 4],
  [0, 6, 5, 0, 1, 3, 0, 2, 0],
  [2, 4, 0, 0, 0, 7, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 0, 0, 0, 5, 6],
  [0, 5, 8, 7, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 4, 0, 8, 0, 0],
];

let board2 = [
  [0, 6, 3, 0, 0, 0, 9, 0, 8],
  [8, 0, 9, 0, 3, 7, 0, 0, 0],
  [0, 0, 0, 0, 8, 0, 0, 3, 2],
  [2, 4, 5, 0, 0, 0, 8, 9, 7],
  [0, 0, 0, 4, 0, 5, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 0],
  [1, 5, 0, 0, 4, 0, 3, 8, 0],
  [0, 7, 8, 0, 0, 2, 0, 0, 5],
  [0, 0, 6, 0, 5, 0, 0, 0, 0],
];

let board3 = [
  [8, 0, 0, 0, 0, 0, 1, 5, 0],
  [7, 0, 0, 8, 0, 0, 0, 0, 0],
  [0, 9, 0, 0, 5, 0, 2, 0, 4],
  [3, 0, 0, 2, 6, 9, 0, 1, 0],
  [0, 0, 0, 5, 0, 0, 0, 0, 3],
  [0, 0, 1, 0, 0, 0, 9, 2, 0],
  [0, 8, 4, 0, 3, 0, 6, 0, 0],
  [2, 0, 0, 9, 0, 0, 8, 0, 0],
  [0, 0, 3, 0, 2, 0, 0, 4, 9],
];

let boards = [];

let grid;

function newBoard() {
    const rand = Math.floor(Math.random() * 4);
    let board = [
        [0, 4, 0, 0, 0, 0, 0, 0, 6],
        [0, 0, 0, 9, 0, 2, 4, 0, 0],
        [0, 5, 6, 4, 0, 7, 9, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0, 0],
        [5, 9, 0, 0, 0, 0, 6, 1, 0],
        [1, 3, 2, 0, 5, 0, 0, 0, 0],
        [0, 2, 7, 0, 8, 6, 0, 0, 0],
        [9, 1, 5, 0, 0, 0, 0, 0, 0],
        [6, 0, 0, 0, 7, 0, 5, 2, 0],
      ];
      
      let board1 = [
        [5, 0, 0, 0, 0, 9, 1, 0, 0],
        [0, 0, 0, 0, 6, 2, 5, 0, 8],
        [0, 1, 0, 0, 0, 8, 7, 6, 4],
        [0, 6, 5, 0, 1, 3, 0, 2, 0],
        [2, 4, 0, 0, 0, 7, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 7, 0, 0, 0, 0, 0, 5, 6],
        [0, 5, 8, 7, 0, 0, 3, 0, 0],
        [0, 0, 0, 0, 4, 0, 8, 0, 0],
      ];
      
      let board2 = [
        [0, 6, 3, 0, 0, 0, 9, 0, 8],
        [8, 0, 9, 0, 3, 7, 0, 0, 0],
        [0, 0, 0, 0, 8, 0, 0, 3, 2],
        [2, 4, 5, 0, 0, 0, 8, 9, 7],
        [0, 0, 0, 4, 0, 5, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 0, 0],
        [1, 5, 0, 0, 4, 0, 3, 8, 0],
        [0, 7, 8, 0, 0, 2, 0, 0, 5],
        [0, 0, 6, 0, 5, 0, 0, 0, 0],
      ];
      
      let board3 = [
        [8, 0, 0, 0, 0, 0, 1, 5, 0],
        [7, 0, 0, 8, 0, 0, 0, 0, 0],
        [0, 9, 0, 0, 5, 0, 2, 0, 4],
        [3, 0, 0, 2, 6, 9, 0, 1, 0],
        [0, 0, 0, 5, 0, 0, 0, 0, 3],
        [0, 0, 1, 0, 0, 0, 9, 2, 0],
        [0, 8, 4, 0, 3, 0, 6, 0, 0],
        [2, 0, 0, 9, 0, 0, 8, 0, 0],
        [0, 0, 3, 0, 2, 0, 0, 4, 9],
      ];
      
      let boards = [];
      boards.push(board);
      boards.push(board1);
        boards.push(board2);
    boards.push(board3);
    grid = boards[rand];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let id = `${i + 1}${j + 1}`;
      let elem = document.getElementById(id);
      
      if (boards[rand][i][j] == 0) {
          elem.innerHTML = ""
          elem.style.background = "#cabbca";
        }
      else {
        elem.innerHTML = boards[rand][i][j]
        elem.style.background = "#fff";
    };
      elem.style.textAlign = "center";
      elem.style.fontSize = "larger";
      
    }
  }

}

function isSafe(board, row, col, number){
    for(let i = 0; i < board.length; i++){
        if(board[row][i] === number){
            return false;
        }
    }

    for(let j = 0; j < board.length; j++){
        if(board[j][col] === number){
            return false;
        }
    }

    let box = Math.floor(Math.sqrt(board.length));
    let rowStart = row - row % box;
    let colStart = col - col % box;

    for(let k = rowStart; k < rowStart + box; k++){
        for(let o = colStart; o < colStart + box; o++){
            if(board[k][o] === number){
                return false;
            }
        }
    }
    return true;

}

function solve(board, n){
    let isEmpty = true;
    let row = -1;
    let col = -1;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] == ""){
                row = i;
                col = j;
                isEmpty = false;
            }
        }

        if(!isEmpty){
            break;
        }
    }

    if(isEmpty){
        return true;
    }

    for(let number = 1; number <= n; number++){
        if(isSafe(board, row, col, number)){
            board[row][col] = number;

            if(solve(board, n)){
                return true;
            }else{
                board[row][col] = "";
            }
        }
    }
    return false;
}

function print() {
    solve(grid, 9);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          let id = `${i + 1}${j + 1}`;
          let elem = document.getElementById(id);
         elem.innerHTML = grid[i][j];
         
          elem.style.textAlign = "center";
          elem.style.fontSize = "larger";
          
        }
      }
    
}




