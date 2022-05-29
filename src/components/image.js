import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <div>
        <img
          style={{ width: "20rem", height: "20rem" }}
          alt="#"
          src={this.props.src}
        ></img>
        {/* {`./assets/dice-${this.props.index}.png`} */}
        <br></br>
        <br></br>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}
