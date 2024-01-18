// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, updateBoard, index, isWinnerSquare, combo, tipoLinea }) => {
  // Verificar si la casilla es parte de la línea ganadora
  // const isWinnerLine = combo && combo.some(cell => [0, 1, 2, 3, 4, 5, 6, 7, 8].includes(cell))

  // Clase CSS para resaltar la línea ganadora
  const lineaCss = tipoLinea ? `${tipoLinea}` : ''

  // Combinación de clases para la casilla
  const className = `square ${isSelected ? 'is-selected' : ''} ${isWinnerSquare ? lineaCss : ''}`

  // Registro de información en la consola para depuración
  console.log(
     `Combo: ${combo}`,
    // `isWinnerLine: ${isWinnerLine}`,
    // `isSelected: ${isSelected}`,
    // `isWinnerSquare: ${isWinnerSquare}`,
    // `lineaCss: ${lineaCss}`,
    `ClassName: ${className}`
  )

  // Función para manejar el clic en la casilla
  const handleClick = () => {
    updateBoard(index)
  }

  // Renderización del componente
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
