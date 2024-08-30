"use client";
import React from "react";
import TicTacToe from "./components/tictactoe";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <TicTacToe />
    </div>
  );
};
export default HomePage;
