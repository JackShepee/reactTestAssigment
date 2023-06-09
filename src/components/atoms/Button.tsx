import styled from "styled-components";

const Button = styled.button<{
  variant?: "primary" | "secondary";
  isActive?: boolean;
}>`
  appearance: none;
  height: 53px;
  padding: 0px 30px;
  border: 0;
  display: flex;
  align-items: center;
  font-family: "Syne";
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.variant === "primary" ? "#D3EAFF" : "#ECECEC"};
  ${(props) =>
    props.isActive &&
    `
    background-color: #dd377d;
  `};
  &:active {
    background-color: #dd377d;
  }
`;

export default Button;
