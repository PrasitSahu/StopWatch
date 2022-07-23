import React, { Component } from "react";
import FontAwesomeIcon from "react-fontawesome";

class Btn extends Component {
  state = {};

  render() {
    return (
      <button
        className={this.props.className}
        style={{
          width: 120,
          height: "auto",
        }}
        onClick={this.props.onClick}
      >
        <FontAwesomeIcon
          name={this.props.fontAwesomeIcon}
          style={{ marginRight: 10 }}
        />
        {this.props.text}
      </button>
    );
  }
}

export default Btn;
