import React from "react";
import './App.css';
import Square from "./Square";
import { useState } from "react";




function Board() {
  const[squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  const winner = getWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isNext ? "X" : "O");
  }

  function getWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        
      }
    }
    return null;
  }

  function handleSquareValue(i) {
    if(squares[i] || getWinner(squares)) {
      return squares[i];
    }
    
    const inComingSquares = [...squares];
    if(isNext) {
      inComingSquares[i] = "X";
    }else {
      inComingSquares[i] = "O";
    }
    setSquares(inComingSquares);
    setIsNext(!isNext);
  }
function resetGame () {
  setSquares([]);
}
  return (
    <main>
      <button onClick={resetGame} className= "resetGame">Reset Game</button>
      <div className="board-row" style={{padding : "10px", border: winner ? "2px solid #1524176b" : null, margin : "5px"}} >{status}</div>
       <div className="board-row">
          <Square value = {squares[0]} handleClick = {() => handleSquareValue(0)}/>
          <Square value = {squares[1]} handleClick = {() => handleSquareValue(1)}/>
          <Square value = {squares[2]} handleClick = {() => handleSquareValue(2)}/>
       </div>
       <div className="board-row">
          <Square value = {squares[3]} handleClick = {() => handleSquareValue(3)}/>
          <Square value = {squares[4]} handleClick = {() => handleSquareValue(4)}/>
          <Square value = {squares[5]} handleClick = {() => handleSquareValue(5)}/>
       </div>
       <div className="board-row">
          <Square value = {squares[6]} handleClick = {() => handleSquareValue(6)}/>
          <Square value = {squares[7]} handleClick = {() => handleSquareValue(7)}/>
          <Square value = {squares[8]} handleClick = {() => handleSquareValue(8)}/>
       </div>
     
    </main>
  );
}

export default Board;
