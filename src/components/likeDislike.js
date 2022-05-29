import React, { Component } from "react";

export default class LikeDislike extends Component {
  state = {};

  render() {
    return (
      <div
        className="menuContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px, solid black",
        }}
      >
        <div
          className="smileyContainer"
          style={{ display: "flex", gap: "3rem", justifyContent: "center" }}
        >
          <div>pic</div>
          <div>{this.props.counter}</div>
        </div>
        <button id={this.props.id} onClick={this.props.handleOnClick}>
          {this.props.mark}
        </button>
      </div>
    );
  }
}
