"use client"
import { useState } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Sep", purchase: 5.8, refinance: 6.0 },
  { month: "Oct", purchase: 5.7, refinance: 5.9 },
  { month: "Nov", purchase: 6.5, refinance: 6.3 },
  { month: "Dec", purchase: 6.3, refinance: 6.2 },
  { month: "Jan, 2025", purchase: 6.6, refinance: 6.5 },
  { month: "Feb", purchase: 6.4, refinance: 6.2 },
  { month: "Mar", purchase: 6.0, refinance: 6.1 },
  { month: "Apr", purchase: 6.5, refinance: 6.3 },
  { month: "May", purchase: 6.4, refinance: 6.2 },
  { month: "Jun", purchase: 6.5, refinance: 6.3 },
  { month: "Jul", purchase: 6.2, refinance: 6.1 },
  { month: "Aug", purchase: 6.2, refinance: 6.0 },
];

export default function Home() {
  const [showPurchase, setShowPurchase] = useState(true);
  const [showRefinance, setShowRefinance] = useState(false);

  return (
    <Container>
      <Title>Historical mortgage rate trends</Title>

      <Filters>
        <Select>
          <option>All (average)</option>
          <option>California</option>
          <option>Texas</option>
        </Select>
        <Select>
          <option>All (average)</option>
          <option>30-year fixed</option>
          <option>15-year fixed</option>
        </Select>
      </Filters>

      <ChartContainer>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[5, 8]} tickFormatter={(tick) => `${tick.toFixed(1)}%`} />
            <Tooltip />
            {showPurchase && (
              <Line type="monotone" dataKey="purchase" stroke="#00C49F" dot />
            )}
            {showRefinance && (
              <Line type="monotone" dataKey="refinance" stroke="#8884d8" dot />
            )}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      <Legend>
        <Label>
          <input
            type="checkbox"
            checked={showPurchase}
            onChange={() => setShowPurchase(!showPurchase)}
          />
          <span style={{ color: "#00C49F" }}>Purchase</span>
        </Label>
        <Label>
          <input
            type="checkbox"
            checked={showRefinance}
            onChange={() => setShowRefinance(!showRefinance)}
          />
          <span style={{ color: "#8884d8" }}>Refinance</span>
        </Label>
      </Legend>
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;

const Filters = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  width: 200px;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const Legend = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;

  input {
    width: 16px;
    height: 16px;
  }
`;
