import React, {Component} from 'react';


class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      unit: 1,
    };
  }

  increment = () => {
    this.setState ({
      count:this.state.count<20?this.state.count + this.state.unit:20
    })
  } 

  decrement = () => {
    this.setState ({
      count:this.state.count>0?this.state.count - this.state.unit:0
    })
  }

  clear = () => {
    this.setState ({
      count: 0
    })
  }

  toggle = () => {
    this.setState ({
      unit:this.state.unit===1?2:1
    })
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          <button type="button" onClick={this.clear}>Clear</button>
    <button type="button" onClick={this.toggle}>Unit: {this.state.unit}</button>
        </div>
      </div>
    )
  }
}

export default Counter;

