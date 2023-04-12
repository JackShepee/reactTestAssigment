import React, { FC } from "react";

interface Props {
  text: any;
}

const Button: FC<Props> = ({ text, ...props }) => {
  return <button>{text}</button>;
};

export default Button;
