"use client";
import React from "react";
import styled from "styled-components";

export default function QuestionsSection() {
  return (
    <Wrapper>
      {/* Header */}
      <Header>
        <Title>
          Got questions? <br /> We ve got answers
        </Title>
        <NavButtons>
          <NavButton className="active">Our products</NavButton>
          <NavButton>Calculators</NavButton>
          <NavButton>Guides & FAQs</NavButton>
        </NavButtons>
      </Header>

      {/* Grid */}
      <Grid>
        {/* Card 1: AI Mortgage */}
        <Card>
          <CardContent>
            <h3>
              How AI Mortgage Lending is Transforming the Home Loan Process
            </h3>
            <Arrow>→</Arrow>
          </CardContent>
          <CardImage src="./girl.webp" />
        </Card>

        {/* Card 2: One Day Mortgage (normal width, split content) */}
        <Card>
          <SplitRow>
            <TextContent>
              <h3>One Day Mortgage¹</h3>
              <p>
                Kick your home loan into hyperdrive. Going from locked rate to
                Commitment Letter takes weeks for traditional lenders. We do it
                in a single day. Traditional lenders deliver a Commitment Letter
                in a few weeks.¹
              </p>
              <Arrow>→</Arrow>
            </TextContent>
            <SideImage src="./text.webp" />
          </SplitRow>
        </Card>

        {/* Wide Better HELOC */}
        <WideCard>
          <SplitRow>
            <SideImage src="./couples.webp" />
            <TextContent>
              <h3>Better HELOC</h3>
              <p>
                Introducing One Day HELOC—your express lane to getting cash from
                your home with our Home Equity Line of Credit.² Access up to 90%
                of your home equity as cash in as little as 7 days.³
              </p>
              <Arrow>→</Arrow>
            </TextContent>
          </SplitRow>
        </WideCard>

        {/* Card 4: Insurance */}
        <Card>
          <CardContent>
            <h3>Insurance</h3>
            <Arrow>→</Arrow>
          </CardContent>
          <CardImage src="./family.webp" />
        </Card>
      </Grid>
    </Wrapper>
  );
}

/* ---------------- Styled Components ---------------- */

const Wrapper = styled.section`
  background: white;
  padding: 60px 80px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.3;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 20px;
`;

const NavButton = styled.button`
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 40px;
  padding: 12px 28px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    border-color: #006b4f;
    color: #006b4f;
    font-weight: 600;
  }

  &:hover {
    border-color: #006b4f;
    color: #006b4f;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #f1f9f4;
  border-radius: 16px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px; // Added space from bottom
`;

const WideCard = styled(Card)`
  grid-column: span 2;
  margin-bottom: 62px; // Added space from bottom
`;

const CardContent = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 20px;
  }
`;

const SplitRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
`;

const TextContent = styled.div`
  flex: 1;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 20px;
  }
`;

const Arrow = styled.button`
  border: 2px solid #ccc;
  background: #fff;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    border-color: #006b4f;
    color: #006b4f;
  }
`;

const CardImage = styled.img`
  margin-top: 20px;
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

const SideImage = styled.img`
  width: 40%;
  border-radius: 12px;
  object-fit: cover;
`;
