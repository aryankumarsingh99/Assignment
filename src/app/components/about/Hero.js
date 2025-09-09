// Mission.js
import styled from 'styled-components';

const Mission = () => {
  return (
    <Container>
      <Title>Our mission</Title>
      <Description>
        <span style={{ whiteSpace: "nowrap" }}>
          We’re making homeownership simpler, faster —
        </span>
        <br />
        <span style={{ whiteSpace: "nowrap" }}>
          and most importantly, more accessible for all
        </span>
        <br />
        <span>
          Americans.
        </span>
      </Description>
    </Container>
  );
};

export default Mission;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // Align content to top
  padding-top: 290px; // Space from top
  height: 100vh;
  text-align: center;
  background: rgb(255 253 250);
  font-family: Arial, sans-serif;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: rgb(45, 122, 62);
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 44px;
  font-weight: 600;
  color: rgb(41 43 41 / 1);
  max-width: 1020px;
  margin: 0 auto;
 
`;
