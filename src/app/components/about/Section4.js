// CompanyTimeline.js
import styled from "styled-components";

const events = [
  {
    year: "2014",
    text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
  },
  {
    year: "2015",
    text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call).",
  },
  {
    year: "2016",
    text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
  },
  {
    year: "2017",
    text: "Better expands into the real estate market with Better Real Estate.",
  },
  {
    year: "2018",
    text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
  },
  {
    year: "2019",
    text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
  },
  {
    year: "2022",
    text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
  },
  {
    year: "2023",
    text: "Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
  },
  {
    year: "2023",
    text: "Better Mortgage launches the fully digital 3-day HELOC.",
  },
  {
    year: "2023",
    text: "Better Mortgage launches One Day Verified Approval Letter.",
  },
  {
    year: "Today",
    text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    isCTA: true,
  },
];

const TimelineWrapper = styled.div`
  background: rgb(255 253 250); // Updated background color
  padding:  16px;
  @media (min-width: 768px) {
    padding: 72px 80px;
  }
`;

const TimelineTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 48px;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
   
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 4px;
  background: #d1d5db;
`;

const TimelineItem = styled.div`
  margin-bottom: 64px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px; // Equal gap between year box and text box
`;

const YearCircle = styled.div`
  z-index: 10;
  background: #017848;
  color: #fff;
  font-size: 1.5rem; // Increased year text size
  font-weight: 700;
  padding: 7px 30px; // Increased box size
  border-radius: 999px;
`;

const ContentBox = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 350px;
  text-align: ${({ align }) => align};
  align-self: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
  margin-left: -30px; // Gap from vertical line when on the right
  margin-right: -30px; // Gap from vertical line when on the left

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Box = styled.div`
  background: #DFE0DC; // Gray background for text item
  padding: 34px;
  border-radius: 4px;
//   border: 1px solid #e5e7eb;
`;

const BoxText = styled.p`
  color: gray;
`;

const CTAButton = styled.button`
  margin-top: 16px;
  background: #017848;
  color: #fff;
  padding: 8px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #065f3c;
  }
`;

const CompanyTimeline = () => {
  return (
    <TimelineWrapper>
      <TimelineTitle>Company timeline</TimelineTitle>
      <TimelineContainer>
        <VerticalLine />
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <TimelineItem key={index}>
              <YearCircle>{event.year}</YearCircle>
              <ContentBox align={isLeft ? "left" : "right"}>
                <Box>
                  <BoxText>{event.text}</BoxText>
                  {event.isCTA && (
                    <CTAButton>Get started</CTAButton>
                  )}
                </Box>
              </ContentBox>
            </TimelineItem>
          );
        })}
      </TimelineContainer>
    </TimelineWrapper>
  );
};

export default CompanyTimeline;
