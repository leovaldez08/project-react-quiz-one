import React, { Component } from "react";

export default class Result extends Component {
  render() {
    return (
      <div>
        <div className="result">
          <div>Final Results</div>
          <div>4 out of 5 correct - 80%</div>
          <div className="restart">
            <button>Restart</button>
          </div>
        </div>
      </div>
    );
  }
}
