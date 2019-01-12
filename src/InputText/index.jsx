import React from "react";
// import "./styles.css";

const InputText = ({ type = "text", value, onChange }) => (
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    />
);

export default InputText;