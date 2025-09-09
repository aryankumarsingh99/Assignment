// StatusQuoThumbnail.js
import styled from 'styled-components';

const StatusQuoThumbnail = () => {
  const handlePlayClick = () => {
    window.open('https://youtu.be/1KjYlLBM9j4', '_blank');
  };

  return (
    <Container>
      <Content>
        <Heading>The status quo is broken</Heading>
        <Text>
          The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
        </Text>
        <Button href="#">Read Vishal’s story</Button>
      </Content>
      <VideoWrapper>
        <VideoThumbnail onClick={handlePlayClick}>
          <PlayButton>&#9658;</PlayButton>
        </VideoThumbnail>
      </VideoWrapper>
    </Container>
  );
};

export default StatusQuoThumbnail;

// Styled Components
const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 120px; // Gap between video and content
  padding: 60px 20px;
  background: rgb(255 253 250);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 80px; // Responsive gap
  }
`;

const Content = styled.div`
  max-width: 500px;
  height: 100%; // Match height with video
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const Button = styled.a`
  display: inline-block;
  background-color:rgb(1 120 72 / 1);
  color: #fff;
  padding: 20px 16px; // Increased height, decreased width
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(0 71 51 / 1)  ;
  }
`;

const VideoWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 410px; // Match height with VideoThumbnail
  display: flex;
  align-items: center;
`;

const VideoThumbnail = styled.div`
  position: relative;
  background-image: url('https://img.youtube.com/vi/1KjYlLBM9j4/maxresdefault.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  height: 410px;
  overflow: hidden;
  cursor: pointer;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(45, 122, 62, 0.8);
  color: white;
  font-size: 40px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(45, 122, 62, 1);
  }
`;
