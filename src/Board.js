import React from 'react'
import styles from "./Board.css"
import { useState,useEffect,useRef } from 'react';
const Board = ({value,onSquareClick}) => {

  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  )
}
export default Board;
