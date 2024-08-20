import React from 'react'
import style from './styles.module.scss'

function NavBar() {
  return (
    <div className={style['navbar']}>
      <a href="/">Home</a>
      <a href="/memory-game">Memory Game</a>
      <a href="/undoable-counter">Undoable Counter</a>
    </div>
  )
}

export default NavBar