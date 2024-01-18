// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, updateBoard, index, isWinnerSquare, combo, tipoLinea }) => {
  // Clase CSS para resaltar la línea ganadora
  const lineaCss = tipoLinea ? `${tipoLinea}` : ''

  // Combinación de clases para la casilla
  const className = `square ${isSelected ? 'is-selected' : ''} ${isWinnerSquare ? lineaCss : ''}`

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
