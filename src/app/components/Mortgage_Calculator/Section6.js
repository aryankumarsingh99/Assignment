"use client"
import { useState } from "react";
import styled from "styled-components";

const faqData = [
  "How to find your payments with a mortgage calculator for home loans",
  "What you can do with this home payment calculator",
  "What does a mortgage payment include?",
  "Mortgage payment formula",
  "How to lower monthly mortgage payments",
  "Types of mortgage loans",
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      {faqData.map((item, index) => (
        <FaqItem key={index}>
          <Question onClick={() => toggle(index)}>
            {item}
            <Arrow>{openIndex === index ? "▲" : "▼"}</Arrow>
          </Question>
          {openIndex === index && <Answer>Here is more information about {item}.</Answer>}
          <Divider />
        </FaqItem>
      ))}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 48px;
`;

const FaqItem = styled.div`
  margin-bottom: 16px;
`;

const Question = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding: 16px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.span`
  font-size: 14px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ddd;
`;

const Answer = styled.div`
  font-size: 20px;
  padding: 12px 0 20px;
  color: #555;
`;
