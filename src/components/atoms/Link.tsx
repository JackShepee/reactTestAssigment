import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)<{ isActive?: boolean }>`
  font-family: "Lato";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;

  &:hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.isActive &&
    `
    text-decoration: underline;
  `};
`;

const Link = (props: { to: string; label: string; isActive?: boolean }) => {
  return (
    <StyledNavLink to={props.to} isActive={props.isActive}>
      {props.label}
    </StyledNavLink>
  );
};

export default Link;
