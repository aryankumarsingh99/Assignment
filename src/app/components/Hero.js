import React from "react";
import styled from "styled-components";
import { FiClock } from "react-icons/fi";
import Image from "next/image"; // Add this import

const HeroSection = () => {
  return (
    <Hero>
      <Content>
        <Heading>
          <span>The first</span>
          <br />
          <GradientText>AI-powered</GradientText> Mortgage
        </Heading>
        <SubText>
          Our tech unlocks lower rates, higher chances of approval, <br />
          and a lightning-fast process from approval to closing. Over $100 billion funded.
        </SubText>
        <CTAButton>Start my pre-approval</CTAButton>
        <Info>
          <FiClock /> 3 min | No hard credit check
        </Info>
        <ImageWrapper>
          <Image
            src="/ai-powered-fico.webp"
            alt="AI Powered FICO"
            width={500} // Increased width
            height={150} // Increased height
            style={{ objectFit: "contain" }}
          />
        </ImageWrapper>
      </Content>
    </Hero>
  );
};

export default HeroSection;

// Styled-components
const Hero = styled.section`
  background: linear-gradient(90deg, #004733 0%, #03583C 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px 90px; // Decreased height by reducing top/bottom padding
  color: white;
  font-family: "Inter", "Arial", sans-serif;
`;

const Content = styled.div`
  max-width: 900px;
`;

const Heading = styled.h1`
  font-size: 76px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #00ff9d, #00a4ff, #ff3db8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const CTAButton = styled.button`
  background: linear-gradient(90deg, #00ff9d, #00d47f);
  border: none;
  padding: 16px 40px;
  border-radius: 50px;
  color: #004833;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.9;
  }
`;

const Info = styled.div`
  font-size: 14px;
  color: #cceadd;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const ImageWrapper = styled.div`
  margin-top: 24px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  
`;
