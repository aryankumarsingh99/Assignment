"use client"
import { useState } from "react";
import styled from "styled-components";
import Section2 from "./Section2";
export default function Home() {
  const [homePrice, setHomePrice] = useState("300000");
  const [downPayment, setDownPayment] = useState("60000");
  const [loanTerm, setLoanTerm] = useState("30 years");
  const [interestRate, setInterestRate] = useState("6.500");
  const [zipCode, setZipCode] = useState("10007");
 
  return (
<>
    <Container>
      <Title>Estimate your monthly<br />mortgage payments</Title>
      <Form>
        <InputsWrapper>
          <InputGroup>
            <Input
              type="text"
              value={homePrice}
              onChange={e => setHomePrice(e.target.value)}
              placeholder=" " // Required for floating label
            />
            <Label>Home price</Label>
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              value={downPayment}
              onChange={e => setDownPayment(e.target.value)}
              placeholder=" " // Required for floating label
            />
            <Label>Down payment</Label>
          </InputGroup>
          <InputGroupPercent>
            <Input type="text" value={Math.round((parseFloat(downPayment) / parseFloat(homePrice || "1")) * 100)} readOnly />
            <Percent>%</Percent>
          </InputGroupPercent>
        </InputsWrapper>

        <InputsWrapper>
          <InputGroup>
            <Label>Length of loan</Label>
            <Select value={loanTerm} onChange={e => setLoanTerm(e.target.value)}>
              <option>30 years</option>
              <option>15 years</option>
              <option>10 years</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Interest rate</Label>
            <Input
              type="text"
              value={interestRate}
              onChange={e => setInterestRate(e.target.value)}
              placeholder=" " // Required for floating label
            />
            <Label>Interest rate</Label>
          </InputGroup>
          <InputGroup>
            <Label>ZIP code</Label>
            <Input
              type="text"
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
              placeholder=" " // Required for floating label
            />
            <Label>ZIP code</Label>
          </InputGroup>
        </InputsWrapper>

        <SliderWrapper>
          <Slider type="range" min="0" max="100" />
        </SliderWrapper>

        <Summary>
          <MonthlyPayment>
            <Text>Monthly payment</Text>
            <Amount>$1,517/mo</Amount>
            <Button>Get pre-approved</Button>
          </MonthlyPayment>
        </Summary>
      </Form>
      <Section2 />
    </Container>
    
     </>
  );
}

const Container = styled.div`
  margin: 40px 0;
  background-color: #f3f7f3;
  padding: 40px;
  border-radius: 12px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Form = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const InputGroup = styled.div`
  flex: 1;
  min-width: 50px;
  position: relative;
`;

const InputGroupPercent = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
`;

const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 14px;
  font-size: 12px;
  color: #555;
  background: #fff;
  padding: 0 4px;
  pointer-events: none;
  transition: 0.2s;
`;

const Input = styled.input`
  width: 100%;
  padding: 24px 12px 8px 12px; // Top padding for label
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: 2px;
    font-size: 10px;
    color: #2a7a2e;
  }
`;

const Percent = styled.div`
  background: #fff;
  padding: 12px;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 8px 8px 0;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SliderWrapper = styled.div`
  margin-top: 20px;
`;

const Slider = styled.input`
  width: 100%;
`;

const Summary = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MonthlyPayment = styled.div`
  text-align: right;
`;

const Text = styled.div`
  font-size: 14px;
  color: #333;
`;

const Amount = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 8px 0;
`;

const Button = styled.button`
  background-color: #2a7a2e;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

