import styled from "styled-components";
import CustomerTestimonial from "./CustomerTestimonial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { TestimonialData } from "../DataCollection";

export default function CustomerTestimonialSection() {


  return (
    <StyledSection>
      <StyledHeadline>
        Bewertung von <StyledSpan>unseren</StyledSpan> Kunden
      </StyledHeadline>
      <StyledArticle>
        <CustomerTestimonial />
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  background: linear-gradient(
    180deg,
    #606060 0%,
    rgba(255, 255, 255, 0.74) 44%,
    rgba(128, 128, 128, 0) 100%
  );
`;

const StyledArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media (min-width: 768px) {
    margin: auto 4rem auto 4rem;
  }
  @media (min-width: 2100px) {
    width: 70%;
    margin: auto;
    padding: auto;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 3rem;
  height: 3rem;
  color: var(--color-secondary-grey-text);
`;

const StyledHeadline = styled.h1`
  color: white;
  text-shadow: 0px 4px 10.3px rgba(255, 255, 255, 0.25);
  margin-top: 2rem;
  padding: 0 3rem;
  text-align: center;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sectionheadline-mobile);
  @media (min-width: 1024px) {
    font-size: var(--font-size-sectionheadline-desktop);
  }
`;

const StyledSpan = styled.span`
  color: var(--color-primary-red);
`;
