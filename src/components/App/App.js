import React from "react";
import Header from "../Header/Header.jsx";
import ResultsContainer from "../ResultsContainer/ResultsContainer.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    headerText: "Name It!",
    headerExpanded: true,
    suggestedNames: [],
  };

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText, // (!inputText) is similar to {headerExpanded: inputText.length > 0 ? false : true }
      suggestedNames: inputText ? name(inputText) : [],
    }); 
  };

  render() {
    
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        {/* <h3>{this.state.headerText}</h3>
        <button
          onClick={() => {
            this.setState({
              headerText: "Hello moto kakali",
            });
          }}
        >
          Magic happens here
        </button> */}
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer  suggestedNames = {this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
