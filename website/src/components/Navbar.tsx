import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar: React.FC = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo>pang!</Logo>
      </Link>
      <NavLinks>
        <Link to="/solutions">Solutions</Link>
        <Link to="/about">About</Link>
      </NavLinks>
      <Actions>
        <Link to="/get-started">
          <StyledButton>Get Started</StyledButton>
        </Link>
      </Actions>
    </Nav>
  );
};

// Styled components for navigation bar
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  background-color: #000;
  color: #fff;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 1rem;
`;

const NavLinks = styled.div`
  justify-content: center;
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
  }
`;

const Actions = styled.div`
  display: flex; /* Ensure items are displayed inline */
  align-items: center; /* Center the button vertically */
`;

const StyledButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 0.5rem 1rem;
  border: none;
  margin-left: 1rem;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 2rem;
`;

// Export the NavigationBar component
export default NavigationBar;
