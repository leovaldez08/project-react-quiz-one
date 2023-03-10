import React, { Component } from "react";
import "../styles/Quiz.css";

export default class Quiz extends Component {
  render() {
    return (
      <div className="QuestionBox">
        <div>
          <div className="current-question">Question: 1 of 5</div>
          <div className="question">
            Which is the most fastest car in the world?
          </div>
          <div className="all-options">
            <button className="options-button">Koenigsegg Agera RS</button>
            <button className="options-button">Bugatti Chiron Super Sport </button>
            <button className="options-button">SSC Tuatara</button>
            <button className="options-button">Hennessey Venom F5</button>
          </div>
          <div className="quit">
            <button className="settings">Previous</button>
            <button className="settings">Next</button>
            <button className="settings">Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
