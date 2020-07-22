import React, { Component } from 'react'
import Shape from './Shape'

export class Selector extends Component {

  constructor() {
    super();
    this.state = {
        selectedShape: 'square',
        time: 0,
    };
  };

  render() {
    return (
      <div className="container"> 
        <div className="navbar">
          <div>Selected: </div>
          <div>{this.state.selectedShape}</div>
        </div>
        <div className="shape-list">
          <Shape shape="square" selectShape={this.selectShape}/>
          <Shape shape="circle" selectShape={this.selectShape}/>
          <Shape shape="oval" selectShape={this.selectShape}/>
          <Shape shape="triangle" selectShape={this.selectShape}/>
          <Shape shape="triangle_down" selectShape={this.selectShape}/>
          <Shape shape="triangle_left" selectShape={this.selectShape}/>
          <Shape shape="triangle_right" selectShape={this.selectShape}/>
          <Shape shape="trapezium" selectShape={this.selectShape}/>
          <Shape shape="star" selectShape={this.selectShape}/>
        </div>
        <div className="footer">{this.state.time} shapes has been clicked.</div>
      </div>
    )
  }

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
      time: this.state.time + 1
    })
  }
}

export default Selector
