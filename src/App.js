import React from "react";
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

class App extends React.Component {
  state = {
    players : [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  }

  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  //증가 또는 감소하는 핸들러 메서드
  handleChangeScore = (id,delta) => {
    console.log(id, delta);
    this.setState(prevState => ({
      players: prevState.players.map(item => {
        if(item.id === id) {
          item.score = item.score + delta;
        }
        return item;
      })
    }))
  }

  //player 추가하는 메서드
  handleAddPlayer = (name) => {
    console.log(name);
    // player id 최대값 찾기
    let maxId = 0;
    this.state.players.forEach(item => {
      if(item.id > maxId){
        maxId = item.id;
      }
    });
    //추가
    this.setState({
      players: [
        ...this.state.players /*스프레드연산자 전에있던걸 카피해온다*/,
        {id: maxId + 1, name/*name: name key와 value가같으면 name만 써도된다*/, score: 0}
      ]
    })
    // 폼 초기화
    this.setState({playerName:""})
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players}/>

        {
          this.state.players.map(player =>
            <Player name={player.name} score={player.score} id={player.id} key={player.id.toString()}
                    score={player.score}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}/>)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    )
  }
}

export default App;
