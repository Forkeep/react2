import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleClickItem(index) {
    const list1 = this.state.list;
    list1.splice(index, 1);
    this.setState({
      list: list1
    });
  }

  hadleClickBtn() {
    this.setState({
      // 此处应该是this.state.list   this.state.inputValue  
      // 不是 list   inputvalue 
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.hadleClickBtn.bind(this)}>add</button>
        <div>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={this.handleClickItem.bind(this, index)}
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
