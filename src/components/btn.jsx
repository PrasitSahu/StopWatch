import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Btn = ({
  text,
  onClick,
  className = "",
  icon,
  width = 120,
  height = "auto",
  style = {},
  iconPosition = "left",
}) => {
  const renderIcon = () =>
    icon ? <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} /> : null;

  return (
    <button
      className={className}
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && renderIcon()}
      {text}
      {icon && iconPosition === "right" && (
        <FontAwesomeIcon icon={icon} style={{ marginLeft: 10 }} />
      )}
    </button>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

Btn.defaultProps = {
  onClick: () => {},
  className: "",
  icon: null,
  width: 120,
  height: "auto",
  style: {},
  iconPosition: "left",
};

export default Btn;
