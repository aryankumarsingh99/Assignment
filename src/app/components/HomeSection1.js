"use client";
import React from "react";
import styled from "styled-components";

export default function CustomerStories() {
  return (
    <Container>
      <HorizontalCenter>
        <LeftSection>
          <VideoCard>
            <iframe
              src="https://www.youtube.com/embed/pKy7cNtaJ0c"
              title="Customer Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <Overlay>
              <p>
                "I used Better three years ago for my primary residence and just
                now for my vacation home. Very simple process. Each time it took
                about two weeks to close."
              </p>
              <small>Paul – Better Mortgage customer</small>
            </Overlay>
          </VideoCard>
          {/* Tabs under video */}
          <Tabs>
            <TabButton className="active">Paul</TabButton>
            <TabButton>Amanda</TabButton>
            <TabButton>Tiara</TabButton>
          </Tabs>
        </LeftSection>
        <TextSection>
          <h1>
            Find out why <br /> we’re better.
          </h1>
          <Button href="#">See all our stories</Button>
          <TrustPilot>
            <Star>★</Star> Trustpilot <Excellent>Excellent</Excellent> 4.4 out of 5
          </TrustPilot>
        </TextSection>
      </HorizontalCenter>
    </Container>
  );
}

/* ---------------- Styled Components ---------------- */

const Container = styled.section`
  display: flex;
  align-items: flex-start; // Align items to the top
  justify-content: center;
  padding: 120px 60px 60px 60px;
  gap: 60px; // Reduced gap to bring right section closer to video
  flex-wrap: wrap;
  background: white;
  color: #111;
`;

const HorizontalCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 410px; // Increased gap between video and text section
  width: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoCard = styled.div`
  position: relative;
  width: 340px;
  height: 630px; // Increased height
  border-radius: 15px;
  overflow: hidden;
  background: black;

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  color: #fff;
  font-size: 16px;
  line-height: 1.4;

  small {
    display: block;
    margin-top: 10px;
    font-size: 13px;
    opacity: 0.8;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const TabButton = styled.button`
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 30px;
  padding: 8px 28px;
  font-size: 14px;
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease;

  &.active {
    border-color: #0c6;
    color: #0c6;
    border: 5px solid #004833;
    font-weight: bold;
    border-radius: 40px; /* bigger border-radius only for Paul */
    padding: 8px 22px; /* slightly larger than others */
  }

  &:hover {
    border-color: #0c6;
    color: #0c6;
  }
`;

const TextSection = styled.div`
  max-width: 500px;

  h1 {
    font-size: 80px; // Increased size
    font-weight: 730;
    margin-bottom: 28px;
    line-height: 1.1;
  }
`;

const Button = styled.a`
  display: inline-block;
  background: #004b3c;
  color: white;
  padding: 20px 48px; // Increased padding for bigger button
  border-radius: 40px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
`;

const TrustPilot = styled.div`
  margin-top: 25px;
  font-size: 16px;
`;

const Star = styled.span`
  color: #0c6;
  font-size: 20px;
  margin-right: 5px;
`;

const Excellent = styled.span`
  color: #0c6;
  font-weight: bold;
`;
