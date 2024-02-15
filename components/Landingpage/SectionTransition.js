import styled from "styled-components";

export default function SectionTransition() {
  return (
    <StyledSection>
      <StyledArticle>
        <StyledSmallerHeadline>
          <StyledSpan>egal</StyledSpan> ob Einsteiger oder Profi
        </StyledSmallerHeadline>
        <StyledGreaterHeadline>
          Alles was du brauchst auf einen <StyledSpan>Klick</StyledSpan>
        </StyledGreaterHeadline>
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-color: #cdced0;
  width: 100%;
  margin-top: 6rem;
  @media (min-width: 768px) {
    margin-top: 10rem;
  }
`;

const StyledArticle = styled.article`
  padding: 2rem;
  @media (min-width: 480px) {
    width: 80%;
    margin: auto;
  }
  @media (min-width: 768px) {
    width: 75%;
    margin: auto;
  }

  @media (min-width: 1440px) {
    width: 65rem;
    margin: auto;
  }
`;

const StyledSmallerHeadline = styled.h1`
  font-size: var(--font-size-common-text-mobile);
  margin: 0rem auto 0rem auto;
  @media (min-width: 1024px) {
    font-size: var(--font-size-greater-text-desktop);
    margin-top: 1rem;
  }
`;

const StyledGreaterHeadline = styled.h2`
  font-size: 1.5rem;
  margin: 0rem auto 0rem auto;
  @media (min-width: 1024px) {
    font-size: var(--font-size-sectionheadline-desktop);
    margin-bottom: 1rem;
  }
`;

const StyledSpan = styled.span`
  color: var(--color-primary-red);
`;
