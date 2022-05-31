import './App.css';
import React,{useState} from "react"
import Board from "./components/Board"
import ScoreBoard from './components/ScoreBoard';
function App() {
  const win_conditions=[
[0 ,1 ,2],
[3 ,4 ,5],
[6 ,7 ,8],
[0 ,3 ,6],
[1 ,4 ,7],
[2 ,5 ,8],
[0 ,4 ,8],
[2 ,4 ,6]

]

const [board,setboard]=useState(Array(9).fill(null))
const [xPlaying,setPlaying]=useState(true)
const[scores,setscores]=useState({xScore:0,oScore:0})
const [gameover,setgameover]=useState(false)
  // const board=["X","X","X","X","X","X","X","X","X"]
  const handleBoxClick=(boxidx)=>{
const updatedBoard=board.map((value,idx)=>{
  if(idx === boxidx){
    return xPlaying ===true ?"X":"o"
  }
  else{
    return value
  }
})
const winner=checkwinner(updatedBoard)
console.log(updatedBoard)
if(winner){
  if(winner==="o"){
  let {oScore}=scores
  oScore+=1
setscores({...scores,oScore})
  }
  else{
    let {xScore}=scores
    xScore+=1
  setscores({...scores,xScore})
  }
}
console.log(scores)
setboard(updatedBoard)
setPlaying(!xPlaying)

  }
  const checkwinner=(board)=>{
    for(let i=0;i<win_conditions.length;i++){
      const [x,y,z]=win_conditions[i]
      if(board[x] && board[x]===board[y] &&board[y] ===board[z]){
        // console.log(board[x])
        setgameover(true)
        return board[x]
      }
    }
  }
  const reset=()=>{
    setgameover(false)
    setboard(Array(9).fill(null))
  }
  return (
    <div className="App">
    <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board={board}  onClick={gameover ? reset: handleBoxClick}/>

    </div>
  );
}

export default App;
