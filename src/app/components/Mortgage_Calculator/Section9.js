"use client"
import styled from "styled-components";

const opinions = [
  {
    question: "Should I wait for a better market?",
    answer:
      "If you’re buying a home, focus on what works for your budget and lifestyle right now instead of waiting for the ‘perfect’ market. There are program...",
    name: "River Robertson",
    role: "Loan Consultant",
    nmls: "NMLS #1698258",
    avatar: "/avatars/river.jpg", // replace with correct path
  },
  {
    question: "Is it true rates will drop?",
    answer:
      "We’ve been hearing that for 3+ years, and many buyers have missed out on their dream home waiting for that ‘magic moment.’ Nobody has a...",
    name: "David Schultz",
    role: "Loan Consultant",
    nmls: "NMLS #1952787",
    avatar: "/avatars/david.jpg", // replace with correct path
  },
  {
    question: "How should buyers handle scary market headlines?",
    answer:
      "Often, the media headlines are inaccurate and sensationalized. Connect with a licensed loan officer who can help you sort through the noise and give...",
    name: "Libby Owens",
    role: "Senior Loan Consultant",
    nmls: "NMLS #2089666",
    avatar: "/avatars/libby.jpg", // replace with correct path
  },
];

export default function Home() {
  return (
    <Container>
      <Heading>Expert opinions</Heading>
      <Cards>
        {opinions.map((opinion, index) => (
          <Card key={index}>
            <Question>{opinion.question}</Question>
            <Answer>{opinion.answer}</Answer>
            <Profile>
              <Avatar src={opinion.avatar} alt={opinion.name} />
              <ProfileText>
                <Name>{opinion.name}</Name>
                <Role>{opinion.role}</Role>
                <NMLS>{opinion.nmls}</NMLS>
              </ProfileText>
            </Profile>
          </Card>
        ))}
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;
  min-height: 100vh;
  padding-left: 120px;  
  padding-right: 110px;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #eaf3ec;
  border-radius: 12px;
  padding: 20px;
  width: 32%;
  min-width: 280px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Question = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`;

const ProfileText = styled.div``;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Role = styled.div`
  font-size: 12px;
  color: #777;
`;

const NMLS = styled.div`
  font-size: 12px;
  color: #777;
`;
