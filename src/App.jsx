import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Tablero } from './components/Tablero'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [winner, setWinner] = useState(null) // null es que no hay ganador todavia, false es empate
  const [comboWinner, setComboWinner] = useState([])
  const [tipoLinea, setTipoLinea] = useState('')
  const [turn, setTurn] = useState(() => {
    const turnFromstorage = window.localStorage.getItem('turn')
    return turnFromstorage ?? TURNS.X
  })

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setComboWinner([])
    setTipoLinea('')

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return // si hay ALGO escrito o hay GANADOR que no hagas nada, 
    // actualizar el tablero
    const newBoard = [...board] // preparando datos para actualizar board con setBoard
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // console.log(newTurn, index)
    // guardar la partida en el local storage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    // check si hay ganador
    const result = checkWinnerFrom(newBoard)
    const newWinner = result ? result.ganador : null
    // console.log(result)
    if (newWinner != null) {
      setWinner(newWinner)
      setComboWinner(result.combo)
      setTipoLinea(result.tipo)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <Tablero board={board} updateBoard={updateBoard} comboWinner={comboWinner} tipoLinea={tipoLinea} />
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <section>
        <button onClick={resetGame}>Reset</button>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
