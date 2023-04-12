import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import Heart from "../../assets/Heart.svg";

const Header = () => {
  return (
    <nav>
      <a href="/">
        <Logo />
      </a>
      <a href="/">HOME</a>
      <a>TOURS</a>
      <a>ABOUT</a>
      <a>HELP</a>
      <Button text={<img src={Heart} alt="Heart" />} />
      <Button text="SIGN IN" />
    </nav>
  );
};

export default Header;
