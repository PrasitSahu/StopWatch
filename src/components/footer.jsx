import React, { Component } from "react";
import FontAwesomeIcon from "react-fontawesome";

class Footer extends Component {
  state = {
    footer: {
      position: "fixed",
      bottom: 0,
      height: 60,
      backgroundColor: "#242830",
    },
  };
  render() {
    return (
      <footer
        className="footer w-100 d-flex align-items-center"
        style={this.state.footer}
      >
        <div className="container">
          <span style={{ color: "#aab2b9" }}>
            Made with <FontAwesomeIcon name="heart" style={{ fontSize: 12 }} />{" "}
            by{"  "}
            <a
              href="http://github.com/PrasitSahu"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#aab2b9",
                textDecoration: "none",
                borderBottom: "1px solid #aab2b9",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Prasit
            </a>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
