import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function TechnicalProblems() {
  return (
    <StyledSection>
      <StyledHeadline>Technical Problems</StyledHeadline>
      <StyledParagraph></StyledParagraph>
      <StyledArticle>
        <StyledIcon icon={faHeadset} />
        <StyledSecondHeadline>Technical Problems</StyledSecondHeadline>
        <StyledSecondParagraph>
          We are sorry, but we are currently experiencing technical problems.
          Please try again later.
        </StyledSecondParagraph>
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  background: var(--Extra-Colors, #b75c5c);
  margin: auto;
  padding: 0;
  @media (min-width: 1024px) {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-rows: 1fr 0.8fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "headline article"
      "paragraph article";
  }
`;

const StyledHeadline = styled.h1`
  grid-area: headline;
`;

const StyledParagraph = styled.p`
  grid-area: paragraph;
`;

const StyledArticle = styled.article`
  grid-area: article;
  margin: auto auto 5rem auto;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 20%;
  min-width: 20rem;
  min-height: 15rem;
  flex-shrink: 0;
  border-radius: 1.125rem;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(172, 172, 172, 0.2) 100%
    ),
    var(--color-primary-text-grey, #808082);
  box-shadow: 24px 17px 67.3px 32px rgba(0, 0, 0, 0.25);
`;

const StyledIcon = styled(FontAwesomeIcon)``;

const StyledSecondHeadline = styled.h2``;

const StyledSecondParagraph = styled.p``;
