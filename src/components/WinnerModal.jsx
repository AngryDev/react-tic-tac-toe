import PropTypes from 'prop-types';
import { Square } from "./Square"

export const WinnerModal = ({winner, resetGame}) => {
  if(winner == null)return null
  const winnertext = winner === false ? 'Empate' : 'Ganó: '
  return (
      <section className="winner">
        <div className="text">
          <h2>{winnertext}
          </h2>
          <header className="win">
            {winner && <Square>{winner}</Square>}
          </header>
          <footer>
            <button onClick={resetGame}>Nuevo Juego</button>
          </footer>
        </div>
      </section>    
  )
}

WinnerModal.propTypes = {
  resetGame: PropTypes.func.isRequired,
  winner: PropTypes.string.isRequired
}