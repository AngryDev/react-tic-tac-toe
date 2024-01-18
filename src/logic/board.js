import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      // console.log(combo)
      return { combo, ganador: boardToCheck[a], tipo: getTipoLinea(combo) }
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  /* devuelve true si no hay mas jugadas posibles */
  const esEmpate = newBoard.every((square) => square !== null)
  // console.log('Empate :', esEmpate)
  return esEmpate
}

const getTipoLinea = (combo) => {
  // Selecciona la Clase Css segun el caso
  const diagonalId = [[0, 4, 8]]
  const diagonalDi = [[2, 4, 6]]
  const horizontales = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
  const verticales = [[0, 3, 6], [1, 4, 7], [2, 5, 8]]

  if (diagonalId.some(linea => linea.every(cell => combo.includes(cell)))) {
    return 'winner-line-diagr'
  } else if (diagonalDi.some(linea => linea.every(cell => combo.includes(cell)))) {
    return 'winner-line-diagl'
  } else if (horizontales.some(linea => linea.every(cell => combo.includes(cell)))) {
    return 'winner-line-horiz'
  } else if (verticales.some(linea => linea.every(cell => combo.includes(cell)))) {
    return 'winner-line-vert'
  }

  return ''
}
