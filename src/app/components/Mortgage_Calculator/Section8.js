"use client"
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  padding: 0 20px; // Removed top padding
  position: relative;
  flex-direction: column;
`;

const Content = styled.div`
  text-align: center;
  margin: 120px 0; // Space between the two horizontal lines
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1c1c1c;
`;

const Button = styled.button`
  background-color: #007a33;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00632a;
  }
`;

const Note = styled.p`
  font-size: 14px;
  color: #5c5c5c;
  margin-top: 12px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #e0e0e0;
  margin: 0;
`;

export default function Home() {
  return (
    <Container>
      <HorizontalLine />
      <Content>
        <Title>Get your custom quote</Title>
        <Button>Get a personalized offer</Button>
        <Note>...in as little as 3 minutes — no credit impact</Note>
      </Content>
      <HorizontalLine />
    </Container>
  );
}
