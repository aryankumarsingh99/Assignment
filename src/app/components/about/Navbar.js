"use client"
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    const handleScroll = () => {
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setScrolled(heroBottom <= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <LeftSection>
        <Logo>Better</Logo>
        <Menu>
          <MenuItem>Buy</MenuItem>
          <MenuItem>Refinance</MenuItem>
          <MenuItem>HELOC</MenuItem>
          <MenuItem>Rates</MenuItem>
          <MenuItem>Better+</MenuItem>
        </Menu>
      </LeftSection>
      <RightSection>
        <PhoneButton>
          <FiPhone />
        </PhoneButton>
        <SignIn>Sign in</SignIn>
        <ContinueButton>Continue</ContinueButton> {/* Added Continue button */}
        {scrolled && <GetStartedButton>Get Started</GetStartedButton>}
      </RightSection>
    </Nav>
  );
};

export default Navbar;

// Styled-components
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff; // Always white background
  color: #004833; // Dark green text for contrast
  transition: background 0.3s, color 0.3s;
  padding: 16px 60px;
  font-family: "Inter", "Arial", sans-serif;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: black;
  letter-spacing: -0.5px; /* Matches the logo look */
`;

const Menu = styled.div`
  display: flex;
  gap: 64px; // Adjust this value for more or less space between buttons
`;

const MenuItem = styled.div`
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: gray-700;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const PhoneButton = styled.div`
  width: 38px;
  height: 38px;
  border: 1px solid ${({ theme, scrolled }) => (scrolled ? "#004833" : "white")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
`;

const SignIn = styled.div`
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ContinueButton = styled.button`
   background: #008060;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 8px;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`;

const GetStartedButton = styled.button`
  background: #008060;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 10px 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 8px;
  transition: background 0.2s;

  &:hover {
    background: #004833;
  }
`;

const Hero = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  background: url('/path-to-your-image.jpg') no-repeat center center/cover;
`;

const HeroContent = styled.div`
  max-width: 800px;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 32px;
`;

const HeroButton = styled.button`
  background: #008060;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 12px 36px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #006d4f;
  }
`;
