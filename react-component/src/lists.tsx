import * as React from "react";
import * as ReactDOM from "react-dom";

export class Lists extends React.Component {
  constructor() {
    super();
    this.state = {
      a: "string",
    };
  }

  _onClick() {
    this.setState({
      a: this.state.a + '+'
    });
  }

  render() {
    return <div onClick={this._onClick.bind(this)}>{this.state.a}</div>;
  }
}
