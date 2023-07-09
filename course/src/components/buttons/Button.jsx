import React from 'react'
import './button.css'
function Button({children,onClick,classBtn}) {
  return (
    <div className={`btn ${classBtn}`} onClick={onClick}>{children}</div>
  )
}

export default Button