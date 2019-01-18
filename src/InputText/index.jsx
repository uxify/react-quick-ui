import React from "react";
// import "./styles.css";

class InputText extends React.PureComponent {
  onChange = (value) => {
    const { onChange } = this.props;
    onChange(value);
  }
  render() {
    const { value, className, onChange, ...rest} = this.props;
    const inputStyle = classnames("textInput", className);
    return (
      <input
        {...rest}
        type={"text"}
        className={inputStyle}
        value={value}
        onChange={this.onChange}
      />
    )
  }
}

export default InputText;