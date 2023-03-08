import React from 'react';
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color, color: props.textColor }}
    >
      {props.label}
    </button>
  );
}

export default Button;