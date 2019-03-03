import React from "react";
import './App.css';

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>
        {props.title}
      </h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}


const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
    </span>
    <span className="player-name">{props.name}</span>
    <Counter score={props.score}/>
  </div>
);

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 10
    };
    this.incrementScore();
    //this.incrementScore = this.incrementScore.bind(this);
  }


  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
        <span className='counter-score'>{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}>+</button>
      </div>
    )

  }

  incrementScore = () => {
    console.log(this)
    this.setState({score: this.state.score + 1});
  };

  decrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score - 1}
    })
  };
}


class App extends React.Component {
  state = {
    players : [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={1 + 10}/>

        {
          this.state.players.map(player =>
            <Player name={player.name} score={player.score} key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer} id={player.id}/>)
        }
      </div>
    )
  }
}

export default App;
