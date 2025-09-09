"use client"
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Title>Simple steps to get pre-approved</Title>
      <Steps>
        <Step>
          <Number>1</Number>
          <StepTitle>Share a few details</StepTitle>
          <StepDescription>
            Tell us about your income, credit, and home goals—it takes as little as 3
            minutes and won’t affect your credit score.
          </StepDescription>
        </Step>
        <Step>
          <Number>2</Number>
          <StepTitle>See your homebuying budget</StepTitle>
          <StepDescription>
            In minutes, we’ll show you exactly how much you can get pre-approved for—so
            you know your price range before you shop.
          </StepDescription>
        </Step>
        <Step>
          <Number>3</Number>
          <StepTitle>Get your pre-approval letter</StepTitle>
          <StepDescription>
            Download your letter instantly and start touring homes with confidence (and a
            stronger offer in hand).
          </StepDescription>
        </Step>
      </Steps>
    </Container>
  );
}

const Container = styled.div`
  padding: 60px 170px; // Reduced top padding, keep left/right space
  min-height: 100vh;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 30px;
  margin-bottom: 30px;
  color: #1c1c1c;
`;

const Steps = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Step = styled.div`
  background-color: #edf4ec;
  border-radius: 12px;
  padding: 24px;
  flex: 1;
  min-width: 250px;
`;

const Number = styled.div`
  font-size: 88px;
  
  color: #34c759;
  margin-bottom: 12px;
`;

const StepTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #1c1c1c;
`;

const StepDescription = styled.p`
  font-size: 14px;
  color: #5c5c5c;
  line-height: 1.5;
`;
