import "./App.css"
import Board from "./Board";
import { useEffect, useRef, useState } from "react";
export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [pre,setPre]=useState([])

  function calculateWinner(squares) {
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
        let s1=document.getElementsByClassName("square")[a]
        let s2=document.getElementsByClassName("square")[b]
        let s3=document.getElementsByClassName("square")[c]
        s1.classList.add("active")
        s2.classList.add("active")
        s3.classList.add("active")
        return squares[a];
      }
    }
    return null;

  }


  function handleClick(i) {


    const nextSquares = squares.slice(); // Create a copy of the squares array
    if (squares[i] ||calculateWinner(squares)) {
      return;
    }
    // Set the square to 'X' or 'O' based on the current player's turn
    if (xIsNext) {
        nextSquares[i] = "X";
    } else {
        nextSquares[i] = "O";
    }
pre.push(i)
console.log(pre[pre.length-1])
    setXIsNext(!xIsNext); // Toggle the player
    setSquares(nextSquares); // Update the state
    // Debugging log: Use nextSquares to see the updated state
    console.log(nextSquares);

}

const winner = calculateWinner(squares);
let status;
if (winner) {
  status = 'Winner: ' + winner;
} else {
  status = 'Next player: ' + (xIsNext ? 'X' : 'O');

}




  return (
  <>
  <div className="container">
  <div>
<h1 className="winner">{status}</h1>
  <div className="board-row">
        <Board value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Board value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Board value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Board value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Board value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Board value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Board value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Board value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Board value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </div>
  </div>
  <div className="button">
  <button className="reset" onClick={()=>{
    setSquares([null,null,null,null,null,null,null,null,null])
    document.querySelectorAll(".square").forEach(e=>e.classList.remove("active"))
  }}>RESTART</button>
  <button className="back" onClick={()=>{
    setSquares((pres)=>{
      const newSquares = [...pres]; // create a copy of the current state
    newSquares[pre[pre.length - 1]] = null; // modify the last item in the copied array
    setPre(pre.slice(0,pre.length - 1))
    pres=newSquares
    setXIsNext(!xIsNext)
    return pres; // return the updated array as the new state
    })
  }}>BACK</button>
  </div>
  </>
  );
}
