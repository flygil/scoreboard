import React from "react";


export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 10
    };
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
