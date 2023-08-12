import React from 'react'

const Button = ({cN, onClick, children}) => {
  return (
    <button onClick={onClick} className={cN}>
      {children}
    </button>
  )
}

export default Button
