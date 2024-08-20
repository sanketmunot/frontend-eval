import { createContext, useRef, useState } from 'react'
import GameBoard from './GameBoard/GameBoard'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const boardSet = new Array(36).fill(null).map((x, i) => {
  return {
    id: i,
    text: i > 17 ? i % 18 : i,
  }
})


export const BoardContext = createContext({});
function App() {
  const [gameOn, setGameOn] = useState(false)
  const [board, setBoard] = useState(shuffleArray(boardSet))
  const [gameOver, setGameOver] = useState(false)
  const allowClick = useRef(true)
  const selectedCount = useRef(0);
  const matchedCount = useRef(0);

  const updateBoard = (newBoard) => {
    selectedCount.current += 1;
    if (selectedCount.current === 2) {
      allowClick.current = false;
      selectedCount.current = 0;
      setTimeout(() => {
        const selectedTiles = newBoard.filter(t => t.isClicked && !t.isMatched)
        if (selectedTiles[0].text !== selectedTiles[1].text) {
          selectedTiles.forEach(t => t.isClicked = false)
        } else {
          selectedTiles.forEach(t => t.isMatched = true)
          matchedCount.current += 2;
          if(matchedCount.current === 36) {
            setGameOver(true)
          }
        }
        setBoard([...newBoard])
        allowClick.current = true;
      }, 3000)
    }
    setBoard(newBoard);

  }

  return (
    <>
      <div className="container">
        {!gameOn && <button onClick={() => setGameOn(true)}>Play game</button>}
        {!gameOver && gameOn && <BoardContext.Provider value={{ board, updateBoard, allowClick: allowClick }}> <GameBoard /> </BoardContext.Provider>}
        {gameOver && <h1>Game Over</h1>}
      </div>
    </>
  )
}


export default App
