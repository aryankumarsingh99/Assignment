// components/Footer.js
"use client"
import styled from 'styled-components';
import Image from 'next/image';

const FooterContainer = styled.footer`
   
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
`;

const Logo = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Link = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  margin-bottom: 8px;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const LegalLinks = styled.div`
  margin-bottom: 10px;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const BottomText = styled.div`
  font-size: 0.75rem;
  color: #666;
  text-align: center;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  padding-left: 130px;   // Space on left side
  padding-right: 130px;  // Space on right side

  hr {
    margin-left: 230px;   
    margin-right: 230px;  
    border: none;
    border-top: 1px solid #ddd;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Logo>Better</Logo>
          <Text>
            Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience backed by superior customer support.
          </Text>
        </Column>

        <Column>
          <ColumnTitle>Contact Us</ColumnTitle>
          <Link href="#">Schedule a conversation</Link>
          <Link href="mailto:hello@better.com">hello@better.com</Link>
          <Link href="tel:4155238837">415–523–8837</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Resources</Link>
        </Column>

        <Column>
          <ColumnTitle>Legal</ColumnTitle>
          <LegalLinks>
            <Link href="#">NMLS Consumer Access</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Disclosures & Licensing</Link>
            <Link href="#">Affiliated Business</Link>
          </LegalLinks>
          {/* <Logos>
            <Image src="/text.webp" alt="Equal Housing Lender" width={40} height={40} />
            <Image src="/text.webp" alt="BBB Logo" width={40} height={40} />
          </Logos> */}
        </Column>
      </FooterContent>
      <BottomText>
        © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License #02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; Better Connect, LLC dba Better Attorney Match provides real estate attorney connection services; and Better Inspect, LLC provides home inspection services. All rights reserved.
        <br /><br />
        Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access.
        <hr />
      </BottomText>
    </FooterContainer>
  );
};

export default Footer;
