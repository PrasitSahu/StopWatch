import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: "#242830",
    display: "flex",
    alignItems: "center",
  };

  const textStyle = {
    color: "#aab2b9",
    fontSize: 14,
  };

  const linkStyle = {
    color: "#aab2b9",
    textDecoration: "none",
    borderBottom: "1px solid #aab2b9",
    fontWeight: "bold",
    marginLeft: 4,
    marginRight: 4,
  };

  return (
    <footer style={footerStyle}>
      <div className="container" style={{ textAlign: "center" }}>
        <span style={textStyle}>
          Made with{" "}
          <FontAwesomeIcon icon={faHeart} style={{ fontSize: 12, color: "red" }} />{" "}
          by
          <a
            href="https://github.com/PrasitSahu"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
          >
            Prasit
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
