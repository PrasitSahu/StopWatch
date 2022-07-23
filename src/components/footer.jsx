import React, { Component } from "react";
import FontAwesomeIcon from "react-fontawesome";

class Footer extends Component {
  state = {
    footer: {
      position: "fixed",
      bottom: 0,
      height: 60,
      backgroundColor: "transparent",
    },
  };
  render() {
    return (
      <footer
        className="footer w-100 d-flex align-items-center"
        style={this.state.footer}
      >
        <div className="container">
          <span className="text-muted">
            Made with <FontAwesomeIcon name="heart" /> by{" "}
            <a
              href="http://github.com/PrasitSahu"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#6C757D" }}
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
