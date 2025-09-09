"use client"
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [propertyTaxes, setPropertyTaxes] = useState("0");
  const [insurance, setInsurance] = useState("0");
  const [hoaFees, setHoaFees] = useState("0");
  const [utilities, setUtilities] = useState("0");

  const principalInterest = 1517;
  const total =
    principalInterest +
    parseInt(propertyTaxes || "0") +
    parseInt(insurance || "0") +
    parseInt(hoaFees || "0") +
    parseInt(utilities || "0");

  return (
<>
    <Container>
      <Left>
        <Title>Monthly payment breakdown</Title>
        <Bar>
          <BarFill style={{ width: "100%" }}>100%</BarFill>
        </Bar>
      </Left>
      <Right>
        <Amount>${principalInterest.toLocaleString()}/mo</Amount>
        <Breakdown>
          <Item>
            <Color style={{ background: "#047949" }} />
            Principal & interest
            <Value>${principalInterest.toLocaleString()}</Value>
          </Item>
          <Item>
            <Color style={{ background: "#8a82ee" }} />
            Property taxes
            <Input
              type="text"
              value={propertyTaxes}
              onChange={(e) => setPropertyTaxes(e.target.value)}
            />
          </Item>
          <Item>
            <Color style={{ background: "#8b82ee80" }} />
            Homeowners insurance
            <Input
              type="text"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
            />
          </Item>
          <Item>
            <Color style={{ background: "#ffd500" }} />
            HOA fees
            <Input
              type="text"
              value={hoaFees}
              onChange={(e) => setHoaFees(e.target.value)}
            />
          </Item>
          <Item>
            <Color style={{ background: "#ff6b4c" }} />
            Utilities
            {/* Removed input for Utilities */}
          </Item>
        </Breakdown>
      
        <CopyButton>Copy estimate link</CopyButton>
      </Right>
    </Container>
  
 </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: none;
  margin: 0; // Remove vertical space
  background-color: #f3f7f3;
  border-radius: 12px;
  padding: 120px 120px; // Added space to both left and right sides
  gap: 40px;
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Bar = styled.div`
 background-color: #047949;
  width:520px;
  height: 110px;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
`;

const BarFill = styled.div`
  background: #047949   ;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 0px;
`;

const Amount = styled.div`
  font-size: 34px;
  font-weight: bold;
  padding-left: 32px;
  margin-bottom: 20px;
`;

const Breakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding-left: 32px; // Padding from left of Breakdown
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; // Keep color closer to item label/input/value
  justify-content: flex-start;
`;

const Color = styled.div`
  width: 6px;
  height: 15px;
  margin-right: 0; // Remove extra space between color and item
`;

const Value = styled.div`
  font-weight: bold;
  margin-left: 8px; // Slight space between input/value and label
`;

const Input = styled.input`
  width: 80px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: right;
`;

 

const CopyButton = styled.button`
  background: #e0e0e0;
  border: none;
  padding-left: 32px ;
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  font-weight:;
`;
