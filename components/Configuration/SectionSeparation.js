import styled from "styled-components";
import ProductSelectButton from "../Buttons/ProductSelectButton";

export default function SectionSeparation({ product }) {
  return (
    <>
      {product && (
        <StyledSection>
          <StyledArticle>
            <StyledGreaterHeadline>
              {product.title}
              <StyledSpan> {product.model}</StyledSpan>
            </StyledGreaterHeadline>
            <StyledButton>Jetzt konfigurieren</StyledButton>
          </StyledArticle>
        </StyledSection>
      )}
    </>
  );
}

const StyledSection = styled.section`
  background-color: #d9d9d9;
  width: 100%;
  margin-top: 2rem;
  padding: 0;
  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

const StyledArticle = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem;
  @media (min-width: 480px) {
    width: 80%;
    justify-content: space-between;
    margin: auto;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    width: 100%;
    margin: auto;
  }

  @media (min-width: 1440px) {
    margin: auto;
  }
`;

const StyledGreaterHeadline = styled.h2`
  font-size: 1.6rem;
  @media (min-width: 1024px) {
    margin-left: 7%;
    font-size: var(--font-size-sectionheadline-desktop);
  }
`;

const StyledSpan = styled.span`
  color: var(--color-primary-red);
`;

const StyledButton = styled(ProductSelectButton)`
  padding: 0;
  margin: 0 0 0 auto;
  @media (min-width: 1024px) {
    width: 16rem;
    height: 5rem;
    font-size: var(--font-size-small-headline-desktop);
    font-weight: var(--font-weight-semibold);
  }
`;
