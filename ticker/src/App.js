import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    // this.pause = ["Ticker is paused", "Pause the Ticker"]
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   if(nextState.count % 3 === 0) return true;
  //   else return false;
  // }

  reset = () => {
    this.setState ({
      count: 0,
    })
  }

  render() {
    return (
      <div>
        <p>The ticker number is: {this.state.count}</p>
        <button type="button" onClick={this.reset}>reset</button>
        {/* <button type="button" onClick={}>pause</button> */}
      </div>
    )
  }
}

export default App

