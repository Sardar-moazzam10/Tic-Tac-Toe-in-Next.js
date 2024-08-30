import React, { useState } from "react";
import Square from "./square";
import Image from "next/image";
import circle from "../../../public/circle.png";
import cross from "../../../public/cross.png";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (boardCopy[index] || calculateWinner(boardCopy)) return;

    boardCopy[index] = isXNext ? "X" : "O";
    setBoard(boardCopy);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = calculateWinner(board);
  let status =  winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;
    
    

  return (
    <div>
      <h1 className="title">
        Tic Tac Toe in <span className="spantag"> Next.js</span>
      </h1>
      <div className="titlee">{status}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "550px",
        }}
      >
        {board.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button
        className="reset"
        onClick={() => setBoard(Array(9).fill(null)) && setIsXNext(true)}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
