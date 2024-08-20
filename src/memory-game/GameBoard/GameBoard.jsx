import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import { BoardContext } from '../App'

function GameTile({ tileId }) {
  const {board, updateBoard, allowClick} = useContext(BoardContext)
  const [tile, setTile] = useState(board[tileId])

  const clickTile = () => {
    if(!allowClick.current) return;
    const clickedTile = board.find(t => t.id === tile.id)
    if(clickedTile.isMatched) return;
    clickedTile.isClicked = true
    setTile({...board[tileId]})
    updateBoard(board)
  }

  const cardClass = tile.isMatched ? 'flip-card-matched' : tile.isClicked ? 'flip-card-active' : 'flip-card'

  useEffect(() => {
    setTile({...board[tileId]})
  }, [board[tileId].isClicked, board[tileId].isMatched])

  return (
    <div className={cardClass} onClick={clickTile}>
      <div className="flip-card-inner">
        <div className="flip-card-back">
          {tile.text}
        </div>
      </div>
    </div>
  )
}


function GameBoard() {
  const x = new Array(36).fill(null);
  return (
    <div className="board">
      {x.map((x, i)=>{
        return <GameTile key={i} tileId={i} />
      })}
    </div>
  )
}


export default GameBoard