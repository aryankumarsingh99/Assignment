"use client"
import { useState } from "react";
import styled from "styled-components";

const reviews = [
  {
    date: "05/12/2025",
    title: "Better offered the best rate",
    content: "Better Mortgage offered the best rate. Other companies finally agreed to match the Better rate, but I stuck Better Mortgage since they offered it first. I would definitely recommend Better.",
  },
  {
    date: "05/11/2025",
    title: "Fast and reliable service",
    content: "The team was responsive and helped me understand all the steps. I highly recommend Better Mortgage.",
  },
  {
    date: "05/10/2025",
    title: "Helpful advice",
    content: "I appreciated the clear guidance and support throughout the mortgage process.",
  },
  {
    date: "05/09/2025",
    title: "Easy application process",
    content: "Applying for a loan was hassle-free and smooth. Excellent experience!",
  },
  {
    date: "05/08/2025",
    title: "Great customer support",
    content: "Whenever I had a question, the support team was there to help promptly.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const review = reviews[currentIndex];

  return (
    <Container>
      <CardLeft>
        <Number>1400+Customs</Number>
        <Text>
          provide us 5 stars in <Star>⭐ Trustpilot</Star>
        </Text>
        <Button>Tell us about your experience</Button>
      </CardLeft>
      <CardRight>
        <Date>{review.date}</Date>
        <Title>{review.title}</Title>
        <Content>{review.content}</Content>
        <SeeLink href="#">See in Trustpilot →</SeeLink>
        <Navigation>
          <NavButton onClick={prev}>‹</NavButton>
          <PageCount>{currentIndex + 1}/5</PageCount>
          <NavButton onClick={next}>›</NavButton>
        </Navigation>
      </CardRight>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding-left: 80px;  // Space on the left
  padding-right: 80px; // Space on the right
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #fcfcf8;
`;

const CardLeft = styled.div`
  background-color: #9AD5AB;
  padding: 32px;
  border-radius: 18px;
  width: 500px; // Increased width
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.div`
  font-weight: bold;
    font-size: 64px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  paddigin-right: 10px;
  text-align: center;
`;

const Star = styled.span`
  color: #2e7d32;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #015C3B;
  color: white;
  border: none;
  padding: 10px 20px;
  padding-right: 40px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
`;

const CardRight = styled.div`
  background-color: #f1f6f4;
  padding: 30px;
  border-radius: 12px;
  width: 600px;
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  font-size: 12px;
  color: #777;
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
`;

const SeeLink = styled.a`
  font-size: 14px;
  color: #2e7d32;
  text-decoration: none;
  margin-bottom: 20px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const PageCount = styled.div`
  font-size: 14px;
  color: #777;
`;
