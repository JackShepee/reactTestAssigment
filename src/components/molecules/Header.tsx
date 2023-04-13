import styled from "styled-components";
import Logo from "../atoms/Logo";
import { Container } from "../atoms/Container";
import Link from "../atoms/Link";
import Button from "../atoms/Button";
import { Heart2 } from "react-iconly";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: rgba(30, 30, 30, 0.48);
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-shrink: 0;
`;

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/favorites");

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        <Nav>
          <Link to="/" label="home" />
          <Link to="" label="tours" />
          <Link to="" label="about" />
          <Link to="" label="help" />
        </Nav>
        <ActionWrapper>
          <Button variant="secondary" onClick={() => handleClick()}>
            <Heart2 />
          </Button>
          <Button variant="primary">sign in</Button>
        </ActionWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
