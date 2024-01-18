import PropTypes from 'prop-types'
import { Square } from './Square'

export const Tablero = ({ board, updateBoard, comboWinner, tipoLinea }) => {
  return (
    <section className='game'>
      {
        board.map((value, index) => {
          const isWinnerSquare = comboWinner && comboWinner.includes(index)

          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              isWinnerSquare={isWinnerSquare}
              combo={comboWinner}
              tipoLinea={tipoLinea}
            >
              {value}
            </Square>
          )
        })
      }
    </section>
  )
}

// Define la validación de props con PropTypes
Tablero.propTypes = {
  updateBoard: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired,
  comboWinner: PropTypes.array
}
