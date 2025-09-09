// HowWereChanging.js
import styled from 'styled-components';

const HowWereChanging = () => {
  return (
    <Section>
      <Container>
        <Heading>Howwe’re changing things</Heading>
        <Paragraph style={{ whiteSpace: "nowrap" }}>
          Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home
        </Paragraph>
        <Paragraph style={{ whiteSpace: "nowrap" }}>
          finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are
        </Paragraph>
        <Paragraph style={{ whiteSpace: "nowrap" }}>
          misaligned with consumers’.
        </Paragraph>
        <div style={{ height: "25px" }} /> {/* Space between the two sections */}
        <Paragraph style={{ whiteSpace: "nowrap" }}>
          That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more
        </Paragraph>
        <Paragraph style={{ whiteSpace: "nowrap" }}>
          efficient, and humans to help make it friendly and enjoyable.
        </Paragraph>
      </Container>
    </Section>
  );
};

export default HowWereChanging;

// Styled Components
const Section = styled.section`
  background-color:rgb(1 120 72 / 1);
  padding: 60px 20px;
  color: #fff;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.0;
  margin-bottom: 8px; // Reduced gap between lines
`;
