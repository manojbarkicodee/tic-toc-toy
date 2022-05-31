import React from 'react'
import "./ScoreBoard.css"
const ScoreBoard = ({scores,xPlaying}) => {
    const {xScore,oScore}=scores
  return (
    <div className='scoreboard'>
<span className={`scores x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
<span className={`scores o-score ${xPlaying && "inactive"}`}>o - {oScore}</span>
    </div>
  )
}

export default ScoreBoard