import React, {Component} from 'react'
import '../css/board.css'
import Square from '../Components/square'

class Board extends Component {
  constructor(props){
    super(props)
    this.state= {
      boardArray: [...Array(10)].map(e=>Array(10)),
      boardLocation: []
    }
  }

  generateCoords = (array)=>{
    let coords=JSON.parse(JSON.stringify(array))
    coords.map((e,i)=>coords.map((e,j)=> coords[i][j]=[i,j]))
    this.setState({boardLocation:coords})
  }
  componentWillMount(){
  this.generateCoords(this.state.boardArray)
}
  render(){
    console.log(this.state.boardArray);
    console.log(this.state.boardLocation);

    let squares = this.state.boardArray.map((square, i)=>{return (
      this.state.boardArray.map((square,j)=>{
        // console.log(this.state.boardLocation[i][j])
        return(
        <Square key={JSON.stringify(this.state.boardLocation[i][j])} updateValue={this.updateValue} contents={this.state.boardArray[i][j]} location={this.state.boardLocation[i][j]} />
      )})
    )})

    return (
      <div className="board">
      {squares}
      </div>
    )
  }

  updateValue = (row,col) => {
   console.log(`click! ${row},${col}`)
   let hiticon="💥"
   let missicon="0"
   let temparray=this.state.boardArray.slice()

   if(temparray[row][col]) alert("You already guessed there")
   else{
     temparray[row][col]=hiticon
     this.setState({boardArray:temparray})
   }
 }
 placeship(row,col,direction,size){
   let ship=[]
   let arr=this.state.boardArray
  //load ship
   if(length){
     for(i=col;i<=col+size;i++) ship.push(arr[row][i])
   }
   else{
     for(i=row;i<=row+size;i++) ship.push(arr[i][col])
   }
 }
}

export default Board
