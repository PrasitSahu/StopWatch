import React, { Component } from "react";

class CountBox extends Component {
  state = {
    count: 0,
    divStyles: {
      width: 70,
      height: 70,
      border: 2,
      borderColor: "black",
      borderStyle: "solid",
      borderRadius: "10%",
      background: "white",
      display: "grid",
      gridTemplateRows: "70px 36.7px",
    },
    inputStyles: {
      fontSize: "2rem",
      fontWeight: "bold",
      outline: "none",
    },
  };

  render() {
    return (
      <React.Fragment>
        <div style={this.state.divStyles}>
          <input
            className="w-100 h-100 border-0 outline-0 text-center bg-transparent text-uppercase"
            type="text"
            style={this.state.inputStyles}
            value={this.props.value}
            disabled
            name={this.props.id}
          />
          <label htmlFor={this.props.id} style={{ fontSize: "1rem" }}>
            {this.props.id}
          </label>
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default CountBox;
