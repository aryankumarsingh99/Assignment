import styled from 'styled-components';

const posts = [
  {
    title: "The LGBTQ+ homeownership story in numbers",
    description: "The fight against LGBTQ+ housing discrimination has turned a corner. Learn you...",
  },
  {
    title: "Vishal Garg, Founder and CEO of Better",
    description: "Better.com CEO Vishal Garg has been interested in tech and lending for...",
  },
  {
    title: "The Year of the Home: 2020 in Review",
    description: "In the socially distanced world of 2020, Better helped 88,100+ new clien...",
  },
  {
    title: "What is Better Mortgage?",
    description: "We launched Better Mortgage because the mortgage industry is...",
  },
  {
    title: "Why I Started Better Mortgage",
    description: "Most founders have a story they pitch when asked about what their compan...",
  },
  {
    title: "Finding Home: Dan and Louise",
    description: "They didn’t think homeownership was in the cards. Now they’re living a...",
  },
  {
    title: "Finding Home: Taisha",
    description: "A doctor and single parent, forced to downsize after divorce, navigates debt...",
  },
  {
    title: "How AI Mortgage Lending is Transforming the Ho...",
    description: "Explore AI mortgage lending, its challenges, risk management, and how AI...",
  },
  {
    title: "Self-employed? Here’s how to get a mortgage",
    description: "Here’s what our underwriters take into consideration when...",
  },
];

const Section = styled.section`
  padding: 2rem 21.5rem; // Added gap to both left and right sides
  background-color: #F0F7F1;
`;

const Title = styled.h2`
  font-weight: 550;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  padding-left: 7px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.7rem; // Decreased horizontal gap between three boxes
  row-gap: 1.4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-colo r: #F0F7F1;
  border: 2px solid #E2E7E2;
  border-radius: 1rem;
  padding: 1.5rem;
  width: 260px; // Decreased width of box
  margin: 0 auto;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const PostTitle = styled.h3`
  font-weight: 550;
  font-size: 16px;
  margin-bottom: 0.5rem;
  color: #4b5563;
`;

const PostDescription = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`;

const ReadMore = styled.a`
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #065f46;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const RelatedPosts = () => {
  return (
    <Section>
      <Title>Related posts</Title>
      <Grid>
        {posts.map((post, index) => (
          <Card key={index}>
            <PostTitle>{post.title}</PostTitle>
            <PostDescription>{post.description}</PostDescription>
            <ReadMore href="#">Read now ➝</ReadMore>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default RelatedPosts;
