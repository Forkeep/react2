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
  handleItemClick(index) {
    // 另一种写法 const list = [...this.state.list];
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  render() {
    return (
      <div className="App">
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
        <div>
          <ul>
            {/* 注意此处两点：1 item和indx顺序不可以更换 2 此处在ul内部处理函数循环遍历state中数据通过return《li》标签显示 */}
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
