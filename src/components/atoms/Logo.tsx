import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <img src={logo} alt="logo" />
    </NavLink>
  );
};

export default Logo;
