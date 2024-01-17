import PropTypes from 'prop-types';
import { Square } from "./Square"

export const Tablero = ({ board, updateBoard }) => {

  return (
    <section className="game">
    {
      board.map((_, index) => {
        return (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {board[index]}
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
  // Otras propiedades aquí
  board: PropTypes.array.isRequired,
};