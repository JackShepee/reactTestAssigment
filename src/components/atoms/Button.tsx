import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  text: any;
  onClick?: React.MouseEventHandler;
}

const ButtonStyle = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const Button: FC<Props> = ({ text, onClick }: Props) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

export default Button;
