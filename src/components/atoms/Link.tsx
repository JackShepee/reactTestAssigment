import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
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
`;

const Link = (props: { to: string; label: string }) => {
  return <StyledNavLink to={props.to}>{props.label}</StyledNavLink>;
};

export default Link;
