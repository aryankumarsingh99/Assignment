"use client";
import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterGrid>
        {/* Column 1 */}
        <FooterCol>
          <Logo>Better</Logo>
          <p>
            Better is a family of companies serving all your homeownership
            needs.
          </p>
          <FooterList>
            <li>
              <span>Better</span> Mortgage
              <p>
                We can’t wait to say “Welcome home.” Apply 100% online, with
                expert customer support.
              </p>
            </li>
            <li>
              <span>Better</span> Real Estate
              <p>
                Connect with a local Better Real Estate Partner Agent to find
                out all the ways you can save.
              </p>
            </li>
            <li>
              <span>Better</span> Cover
              <p>
                Shop, bundle, and save on insurance coverage for home, auto,
                life, and more.
              </p>
            </li>
            <li>
              <span>Better</span> Inspect
              <p>
                Get free repair estimates, 24-hour turnarounds on reports, and
                rest easy with our 100-day inspection guarantee.
              </p>
            </li>
            <li>
              <span>Better</span> Settlement Services
              <p>
                Get transparent rates when you shop for title insurance all in
                one convenient place.
              </p>
            </li>
          </FooterList>
        </FooterCol>

        {/* Column 2 */}
        <FooterCol>
          <ColTitle>Resources</ColTitle>
          <FooterLinks>
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Mortgage calculator with taxes</li>
            <li>Mortgage calculator with PMI</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
            <li>HELOC vs cash-out refinance calculator</li>
            <li>Buy a home</li>
            <li>Sell a home</li>
            <li>Get home inspection</li>
          </FooterLinks>
        </FooterCol>

        {/* Column 3 */}
        <FooterCol>
          <ColTitle>Company</ColTitle>
          <FooterLinks>
            <li>About Us</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Partner With Us</li>
            <li>Learning center</li>
            <li>FAQs</li>
            <li>Investor Relations</li>
          </FooterLinks>
        </FooterCol>

        {/* Column 4 */}
        <FooterCol>
          <ColTitle>Contact Us</ColTitle>
          <FooterLinks>
            <li>hello@better.com</li>
            <li>
              <strong>415–523–8837</strong>
            </li>
            <li>FAQ</li>
            <li>Glossary</li>
          </FooterLinks>

          <ColTitle>Legal</ColTitle>
          <FooterLinks>
            <li>NMLS Consumer Access</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclosures & Licensing</li>
            <li>Affiliated Business</li>
            <li>Browser Disclaimer</li>
          </FooterLinks>

          <Logos>
            <img src="./logo1.png" alt="logo1" />
            <img src="./logo2.png" alt="logo2" />
          </Logos>
        </FooterCol>
      </FooterGrid>
    </FooterWrapper>
  );
}

/* ---------------- Styled Components ---------------- */

const FooterWrapper = styled.footer`
  background: #fff;
  padding: 80px 150px; // Increased left and right space
  border-top: 1px solid #e5e5e5;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const FooterCol = styled.div`
  p {
    color: #444;
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  /* Add top margin for columns 2, 3, and 4 */
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    padding-top: 15px;
    margin-top: 40px; // Space from top
  }
`;

const Logo = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 18px;
    font-size: 18px; // Increased size for Mortgage, Real Estate, etc.
    line-height: 1.5;
    color: #444;

    span {
      font-weight: 700;
      color: #008060;
      margin-right: 4px;
      font-size: 23px; // Increased size of span tag text
    }

    p {
      font-size: 17px;
      color: #666;
      margin-top: 4px;
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 12px;
    font-size: 14px;
    color: #333;
    cursor: pointer;

    &:hover {
      color: #008060;
    }
  }
`;

const ColTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Logos = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;

  img {
    width: 48px;
    height: auto;
  }
`;
