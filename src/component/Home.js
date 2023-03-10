import React, { Component } from "react";
import "../styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="header">
          <h1>Quiz Game</h1>
        </div>
        <div className="container">
          <button className="play-button">PLAY</button>
        </div>
      </div>
    );
  }
}
