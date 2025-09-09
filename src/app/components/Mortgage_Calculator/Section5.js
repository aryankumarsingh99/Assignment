"use client"
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Title>Mortgage Calculator with PMI & Taxes</Title>
      <Paragraph>
        A mortgage calculator for home loans can show your true monthly housing
        costs before you commit to a home loan.
      </Paragraph>
      <Paragraph>
        Home shoppers balance a lot of numbers: home prices, loan sizes, down
        payments, interest rates, property tax rates, mortgage insurance
        premiums, and so on.
      </Paragraph>
      <Paragraph>
        A mortgage payment calculator shows how these variables come together to
        shape a homes monthly payment.
      </Paragraph>
      <Paragraph>
        These tools are invaluable for comparing loan scenarios — and Better
        makes it easy by doing the heavy lifting for you. With access to an
        extensive network of investors, Better essentially “shops the market” on
        your behalf to find competitive rates, saving you the time and stress of
        lender-hunting. In fact, The Wall Street Journal named Better the{" "}
        <Emphasis>Best Lender for Affordability</Emphasis> in 2024.
      </Paragraph>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: center;
  color: #1c1c1c;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const Emphasis = styled.span`
  font-style: italic;
  font-weight: 600;
`;
