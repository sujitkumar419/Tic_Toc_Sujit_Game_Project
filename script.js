let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

function makeMove(index) {
  if (board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    if (checkWinner()) return;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let combo of wins) {
    let [a,b,c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(board[a] + " wins!");
      resetBoard();
      return true;
    }
  }
  if (!board.includes("")) {
    alert("Draw!");
    resetBoard();
    return true;
  }
  return false;
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  let cells = document.getElementsByClassName("cell");
  for (let cell of cells) cell.innerText = "";
}
