import React, { Component } from 'react';
import '../css/square.css'

class Square extends Component {

updateSquare=(e)=>{
  // console.log(this.props.location)
  let X=this.props.location[0]
  let Y=this.props.location[1]
  // console.log(this.props.location)
  this.props.updateValue(X,Y)
}

  render() {
    // console.log(this.props.location);
    return (
      <div className="Squares" onClick={this.updateSquare} >
      {this.props.contents}
      </div>
    );
  }
}

export default Square;
