import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * 
    this.state.board.length)
    this.setState({treasureLocation: treasure})
  }


handleGameplay = (index) => {
 const {board, treasureLocation} = this. state
 if(index === treasureLocation){
   board[index] = "💎"
   this.setState({ board: board})
 }else{
 board[index] = "🌲"
 this.setState({ board: board })
      }
}

  render(){
    console.log("treasure",
    this.state.treasureLocation)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className = "gameBoard">
        {this.state.board.map((value,index)=>{
          return <Square value={ value } 
          value={value}
          index={index}
          handleGameplay={
            this.handleGameplay}
          />
        })}
        </div>
      </>
    )
  }
}
export default App
