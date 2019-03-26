import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      input: ""
    };
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  handleItemClick(index) {
    const list1 = this.state.list;
    list1.splice(index, 1);
    this.setState({
      list: list1
    });
  }

  render() {
    return (
      <div className="App">
        <input
          value={this.state.input}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)} >add</button>
        <div>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={this.handleItemClick.bind(this, index)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
