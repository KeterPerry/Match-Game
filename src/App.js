import "./App.css";
import React, { Component } from "react";
import LikeDislike from "./components/likeDislike";
import Image from "./components/image";
import { data } from "./components/data";

export default class App extends Component {
  state = {
    food: [],
    counter1: 0,
    counter2: 0,
    index: 0,
    isPositive: false,
    isDisplay: false,
  };

  componentDidMount = () => {
    this.setState({ food: data }, () => {
      console.log(this.state.food);
    });
  };

  handleOnClick = (event) => {
    if (
      this.state.index + 1 === this.state.food.length - 1 &&
      this.state.counter1 > this.state.counter2
    ) {
      this.setState({ isDisplay: true, isPositive: false });
    } else if (
      this.state.index + 1 === this.state.food.length - 1 &&
      this.state.counter1 < this.state.counter2
    ) {
      this.setState({ isDisplay: true, isPositive: true });
    }
    event.target.id === "1"
      ? this.setState(
          { counter1: this.state.counter1 + 1, index: this.state.index + 1 },
          () => {
            // console.log(this.state.counter1);
          }
        )
      : this.setState(
          { counter2: this.state.counter2 + 1, index: this.state.index + 1 },
          () => {
            // console.log(this.state.counter2);
          }
        );
  };

  render() {
    return (
      <div className="appContainer">
        <LikeDislike
          counter={this.state.counter1}
          id="1"
          mark="x"
          handleOnClick={this.handleOnClick}
        />
        {this.state.food.length > 0 && (
          <Image
            src={this.state.food[this.state.index].img}
            text={this.state.food[this.state.index].text}
          />
        )}
        <LikeDislike
          counter={this.state.counter2}
          id="2"
          mark="v"
          handleOnClick={this.handleOnClick}
        />
        {this.state.isDisplay &&
          (this.state.isPositive ? (
            <div className="finalMessageContainer">
              <h2> You are definetly a junk food person!</h2>
            </div>
          ) : (
            <div className="finalMessageContainer">
              <h2> Oh,I guess junk food isn't for you!</h2>
            </div>
          ))}
      </div>
    );
  }
}
