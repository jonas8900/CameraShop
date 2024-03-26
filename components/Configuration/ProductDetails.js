import { useEffect } from "react";
import styled from "styled-components";

export default function ProductDetails({ product }) {


  return (
    <StyledMain>
      <StyledHeadline>
        Technische <span>Details</span>
      </StyledHeadline>
      <StyledSection>
        {product &&
          product.technicaldetails &&
          product.technicaldetails.map((section, index) => (
            <StyledArticle key={index}>
              <StyledSecondHeadline>{section.section}</StyledSecondHeadline>
              <StyledList>
                {Object.entries(section.details).map(([key, value]) => (
                  <StyledListItem key={key}>
                    <strong>{key}: </strong>
                    {value}
                  </StyledListItem>
                ))}
              </StyledList>
            </StyledArticle>
          ))}
      </StyledSection>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  background: #fff;
  box-shadow: var(--text-shadow-divs);
  margin: 8rem 1rem 4rem 1rem;

  @media (min-width: 1024px) {
    width: 90%;
    margin: auto auto 4rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    gap: 2rem;
  }
`;

const StyledSection = styled.section`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
`;

const StyledArticle = styled.article`
  padding: 1rem;
  background: #fff;
  @media (min-width: 1024px) {
    box-shadow: 3px 6px 16.1px 0px rgba(206, 206, 206, 0.25);
    margin: 1rem 0 1rem 0;
  }
`;

const StyledSecondHeadline = styled.h2`
  color: var(--color-primary-red);
  text-align: center;
  font-size: var(--font-size-subheadline-mobile);
  font-weight: var(--font-weight-semibold);
`;

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const StyledListItem = styled.li`
  background: #ebebeb;
  margin: 0.5rem auto 0.5rem auto;
  padding: 0.5rem;
`;

const StyledHeadline = styled.h1`
  font-size: var(--font-size-sectionheadline-mobile);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  margin: 2rem;
  padding-top: 2rem;

  span {
    color: var(--color-primary-red);
  }

  @media (min-width: 1024px) {
    text-align: left;
    font-size: 2.8rem;
  }
`;
