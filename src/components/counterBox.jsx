import React from "react";
import PropTypes from "prop-types";

const CountBox = ({ value, id, children, divStyles = {}, inputStyles = {} }) => {
  const defaultDivStyles = {
    width: 70,
    height: 70,
    border: "2px solid black",
    borderRadius: "10%",
    background: "white",
    display: "grid",
    gridTemplateRows: "70px 36.7px",
    justifyItems: "center",
    alignItems: "center",
  };

  const defaultInputStyles = {
    fontSize: "2rem",
    fontWeight: "bold",
    outline: "none",
    textAlign: "center",
    width: "100%",
    height: "100%",
    background: "transparent",
    border: "none",
    textTransform: "uppercase",
  };

  return (
    <div style={{ ...defaultDivStyles, ...divStyles }}>
      <input
        type="text"
        id={id}
        value={value}
        disabled
        style={{ ...defaultInputStyles, ...inputStyles }}
      />
      <label htmlFor={id} style={{ fontSize: "1rem", textAlign: "center" }}>
        {id}
      </label>
      {children}
    </div>
  );
};

CountBox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  divStyles: PropTypes.object,
  inputStyles: PropTypes.object,
};

CountBox.defaultProps = {
  children: null,
  divStyles: {},
  inputStyles: {},
};

export default CountBox;
