// components/HelpWidget.js
"use client"
import styled from 'styled-components';
import { FaHome, FaDollarSign, FaUserShield } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';
 
const CenterWrapper = styled.div`
  display: flex;
  padding-top: 80px; // This prevents content from hiding under navbar
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: white;
`;

const Container = styled.div`
  width: 600px; // Further increased width
  background-color: #ffffff;
  padding: 32px;
  border-radius: 16px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 2.7rem; // Further increased title size
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
`;

const Button = styled.button`
  width: 100%;
  height: 70px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 22px; // Increased button height
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 18px;
  cursor: pointer;
  font-size: 1.15rem; // Increased button text size
  transition: 0.2s ease;

  &:hover {
     border: 4px solid #00703c;
  }
`;

const IconWrapper = styled.div`
  color: #00703c;
  font-size: 2.2rem; // Decreased icon size for unlock items
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 28px 0;
`;

const StatItem = styled.div`
  text-align: center;

  & strong {
    display: block;
    font-size: 1.7rem; // Increased stat number size
    font-weight: bold;
  }

  & span {
    font-size: 1.15rem; // Increased stat description size
    color: #555;
  }
`;

const UnlockList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center items horizontally
  gap: 6px;
  margin-top: 12px;
`;

const UnlockSection = styled.div`
  background-color: #F0F7F1;
  border-radius: 10px;
  padding: 28px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UnlockTitle = styled.p`
  font-weight: bold;
  margin-bottom: 18px;
  font-size: 14px;
  text-align: center; // Center text
`;

const UnlockItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  justify-content: center;
  /* Add right padding only for Exclusive offers */
  &:nth-child(2) {
    padding-right: 65px; // Add right padding to "Exclusive offers"
  }
`;

const HelpWidget = () => {
  return (
    <>  
       <CenterWrapper>
        <Container>
          <Title>Hi, I'm Betsy!<br />What can I help you with?</Title>
          <Button>
            <IconWrapper><FaHome /></IconWrapper>
            Buying a home
          </Button>
          <Button>
            <IconWrapper><MdPayments /></IconWrapper>
            Refinancing my mortgage
          </Button>
          <Button>
            <IconWrapper><FaDollarSign /></IconWrapper>
            Get cash from my home
          </Button>
          <Stats>
            <StatItem>
              <strong>$100B</strong>
              <span>home loans funded entirely online</span>
            </StatItem>
            <StatItem>
              <strong>400K</strong>
              <span>Customers who chose a Better Mortgage</span>
            </StatItem>
          </Stats>
          <UnlockSection>
            <UnlockTitle>After a few questions, you'll unlock:</UnlockTitle>
            <UnlockList>
              <UnlockItem>
                <IconWrapper><FaUserShield /></IconWrapper>
                Custom mortgage rates
              </UnlockItem>
              <UnlockItem>
                <IconWrapper><MdPayments /></IconWrapper>
                Exclusive offers
              </UnlockItem>
              <UnlockItem>
                <IconWrapper><FaHome /></IconWrapper>
                A personalized dashboard
              </UnlockItem>
            </UnlockList>
          </UnlockSection>
        </Container>
      </CenterWrapper>
    </>
  );
};

export default HelpWidget;
