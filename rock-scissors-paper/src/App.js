import React, { Component } from 'react'
import PlayerCard from './Playercard'

class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "scissors", "paper"]
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors",
      playerOneName: "player1",
      playerTwoName: "player2",
    }
  }
  
  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)],
    })
  }

  decideWinner = () => {
    const playerOne = this.state.playerOne
    const playerTwo = this.state.playerTwo

    if(playerOne === playerTwo) {
      return "It's a Tie!"
    }
    else if((playerOne === "rock" && playerTwo === "scissors") || 
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")) {
        return "Player 1 Wins!"
    }
    else {
      return "Player 2 Wins!"
    }
  }

  render() {
    return (
      <div className="style">
        <div>
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        {/* <input type="text" label="player1 name"></input> */}
        <select value="" >
          <option value="">rock</option>
          <option value="">paper</option>
          <option value="">scissors</option>
        </select>
    <div className="winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame}>Play the Game</button>
      </div>
    )
  }

}

//TO DO
// set some names for the players
// make one player controlled 

export default Game;