import React from 'react'
import "./Box.css"
const Box = ({value,onClick}) => {
    const style=value==="X" ? "Box x" : "Box o"
  return (
    <div className={style}   onClick={onClick} >{value}</div>
  )
}

export default Box