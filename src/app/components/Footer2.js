"use client";
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function LegalFooter() {
  return (
    <Wrapper>
      {/* Social Media Icons */}
      <SocialIcons>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </SocialIcons>

      {/* Legal Content */}
      <LegalContent>
        <p>
          ¹Better Mortgage’s One Day Mortgage℠ promotion offers qualified
          customers who provide certain required financial information/
          documentation to Better Mortgage within 4 hours of locking a rate on
          a mortgage loan the opportunity to receive an underwriting
          determination from Better Mortgage within 24 hours of their rate lock.
          The underwriting determination is subject to customary terms,
          including fraud and anti-money laundering checks, that take place pre-
          closing and may trigger additional required documentation from the
          customer. Better Mortgage does not guarantee that initial underwriting
          approval will result in final underwriting approval. See <span style={{ textDecoration: "underline" }}>One Day Mortgage™ Terms and Conditions.</span>
        </p>

        <p>
          ²Better Mortgage’s One Day HELOC℠ promotion offers qualified customers
          who provide certain required financial information/documentation to
          Better Mortgage within 4 hours of locking a rate on a HELOC the
          opportunity to receive an underwriting determination from Better
          Mortgage within 24 hours of their rate lock. The underwriting
          determination is subject to customary terms, including fraud and
          anti-money laundering checks, that take place pre-closing and may
          trigger additional required documentation from the customer. Better
          Mortgage does not guarantee that initial underwriting approval will
          result in final underwriting approval. See <span style={{ textDecoration: "underline" }}>One Day HELOC Terms and Conditions.</span>
        </p>

        <p>
          *Assumes borrowers are eligible for the Automated Valuation Model
          (AVM) to calculate their home value, their loan amount is less than
          $400,000, all required documents are uploaded to their Better Mortgage
          online account within 4 hours of application, closing is scheduled for
          the earliest available date and time, and a notary is readily
          available. Funding timelines may vary and may be longer if an
          appraisal is required to calculate a borrower’s home value.
        </p>

        {/* First Divider */}
        <hr />

        <p>
          © 2025 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc. License # 02095025 provides real estate services; Better Cover,
          LLC sells insurance products; and Better Settlement Services provides
          title insurance services; and Better Inspect, LLC provides home
          inspection services. All rights reserved.
        </p>

        <p>
          Better MC operates under the name Better Mortgage Corporation in New
          York. <span style={{ textDecoration: "underline" }}>New York State Housing and Anti-Discrimination Notice</span> &nbsp;
          <span style={{ textDecoration: "underline" }}>New York Standard Operating Procedures</span>
        </p>

        <p>
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. World Trade
          Center, 60th Floor, New York, NY 10007. Loans made or arranged
          pursuant to a California Finance Lenders Law License. Not available in
          all states. Equal Housing Lender. <span style={{ textDecoration: "underline" }}>NMLS Consumer Access</span>.
        </p>

        <p>
          Better Real Estate, LLC; BRE, Better Home Services, BRE Services, LLC
          and Better Real Estate, and operating in the State of California
          through its wholly owned subsidiary Better Real Estate California Inc,
          is a licensed real estate brokerage and maintains its corporate
          headquarters at 325-41 Chestnut Street, Suite 782, Philadelphia, PA
          19106. Here is a full listing of Better Real Estate LLC’s <span style={{ textDecoration: "underline" }}>license numbers.</span> Better Real Estate, LLC provides access to real estate
          brokerage services via its nationwide network of partner brokerages
          and real estate agents (“Better Real Estate Partner Agents”).
        </p>

        <p>
          Better Settlement Services, LLC, 325-41 Chestnut Street, Suite 810,
          Philadelphia, PA 19106.
        </p>

        <p>
          Homeowners insurance policies are offered through Better Cover, LLC, a
          Pennsylvania Resident Producer Agency, License #881593. 325-41
          Chestnut Street, Suite 807, Philadelphia, PA 19106. Better Cover, LLC
          is a full listing of Better Cover LLC’s <span style={{ textDecoration: "underline" }}>license numbers.</span>
        </p>

        <p>
          Better Inspect, LLC maintains its corporate headquarters at 325-41
          Chestnut Street, Suite 814, Philadelphia, PA 19106.
        </p>

        <p>
          Any unauthorized use of any proprietary or intellectual property is
          strictly prohibited. All trademarks, service marks, trade names,
          logos, and domain names are proprietary to Better Home & Finance
          Holding Company. Certain trademarks, service marks, and logos provided
          by Better Real Estate Partner Agents are the property of their
          respective owners. Better Cover is a registered trademark with the US
          Patent and Trademark Office and is owned by Better Cover LLC.
        </p>
        {/*
        <p>
          Licensed by the Department of Financial Protection and Innovation
          under the California Residential Mortgage Lending Act.
        </p>
        */}
        <p>
          <span style={{ textDecoration: "underline" }}>Information About Brokerage Services</span> | <span style={{ textDecoration: "underline" }}>Consumer Protection Notice</span>
        </p>
      </LegalContent>
    </Wrapper>
  );
}

/* ---------------- Styled Components ---------------- */
const Wrapper = styled.footer`
  background: #fff;
  padding: 70px 150px; // Increased left and right space
  font-family: Arial, sans-serif;
  color: #333;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  a {
    font-size: 20px;
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #008060;
    }
  }
`;

const LegalContent = styled.div`
  font-size: 12px;
  line-height: 1.6;
  color: #444;

  p {
    margin-bottom: 16px;
  }

  a {
    color: #008060;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
  }
`;
