import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // 此处this.state 不是函数
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

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  hadleItemClick(index) {
    const list1 = this.state.list;
    list1.splice(index, 1);
    this.setState({
      list: list1
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
        <div>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li key={index} onClick={this.hadleItemClick.bind(this, index)}>
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
