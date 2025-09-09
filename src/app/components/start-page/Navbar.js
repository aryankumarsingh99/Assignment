// components/Footer.js
"use client"
import styled from 'styled-components';
import { FaPhoneAlt, FaHome } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  padding-right: 150px;
  padding-left: 150px;
  border-top: 1px solid #e0e0e0;
  /* background-color removed */
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #00703c;
`;

const Divider = styled.div`
  height: 3px;
  background-color: #e0e0e0;
  width: 80%; // Decreased width of horizontal line
  position: absolute;
  top: 15%;
  left: 10%; // Center the line horizontally
  transform: translateY(50%);
`;

const FloatingHomeIcon = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #00703c;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 112, 60, 0.5);
  color: white;
`;

const Help = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
`;

const PhoneIcon = styled(FaPhoneAlt)`
  margin-right: 8px;
  color: #00703c;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>
         Better<br />Mortgage
      </Logo>
      <Divider />
      <FloatingHomeIcon>
        <img src="/home.webp" alt="Home" style={{ width: "32px", height: "32px" }} />
      </FloatingHomeIcon>
      <Help>
        <PhoneIcon />
        Need help? Call 415–523–8837
      </Help>
    </FooterContainer>
  );
};

export default Footer;
 
