import React from "react";
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

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
