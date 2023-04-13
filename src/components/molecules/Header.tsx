import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import Heart from "../../assets/Heart.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavLink to="/">HOME</NavLink>
      <a>TOURS</a>
      <a>ABOUT</a>
      <a>HELP</a>
      <NavLink to="/favorites">
        <img src={Heart} alt="Heart" />
      </NavLink>
      <Button text="SIGN IN" />
    </nav>
  );
};

export default Header;
