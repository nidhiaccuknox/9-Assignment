  
import React from 'react'
import './Input.css'

function Button (props) {
  const { size = 'medium', children, ...rest } = props
  return (
    <input className={`input ${size}`} {...rest}/>
      
  )
}

export default Button;

{/* {children}
    </input> */}