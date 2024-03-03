import ProductSelectButton from "@/components/Buttons/ProductSelectButton";
import NavigationBar from "@/components/Navigation/NavBar";
import Image from "next/image";
import styled from "styled-components";

export default function ProductIntroduction({
  productSelection,
  setProductSelection,
}) {
  function handleProductSelection(product) {
    setProductSelection(product);
  }

  return (
    <>
      <StyledSection>
        <StyledImage
          src={"/Backgroundpictures/Shop.jpg"}
          width={1920}
          height={1080}
          alt="picture of an shop"
        />
        <NavigationBar />
        <StyledSectionForHeadSection>
          <StyledHeadline>
            Unsere <StyledSpan>Produkte</StyledSpan>
          </StyledHeadline>
          <StyledSecondHeadline>
            Wonach sind Sie auf der <StyledSpan>Suche</StyledSpan>?
          </StyledSecondHeadline>
        </StyledSectionForHeadSection>
        <StyledButtonWrapper>
          <ProductSelectButton
            onClick={() => handleProductSelection("cameras")}>
            Kameras
          </ProductSelectButton>
          <ProductSelectButton onClick={() => handleProductSelection("lenses")}>
            Objektive
          </ProductSelectButton>
          <ProductSelectButton onClick={() => handleProductSelection("lights")}>
            Lichter
          </ProductSelectButton>
        </StyledButtonWrapper>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin: auto;
  min-height: 30vh;
  @media (min-width: 768px) {
    min-height: 75vh;
  }
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );

  border-radius: 0rem 0rem 9.0625rem 0rem;
  border: 1px solid transparent;
  @media (max-width: 768px) {
    border-radius: 0rem 0rem 3.0625rem 0rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.35;
  border-radius: 0rem 0rem 9.0625rem 0rem;
  z-index: -1;
  min-height: 30vh;
  @media (min-width: 768px) {
    min-height: 75vh;
  }

  @media (max-width: 768px) {
    border-radius: 0rem 0rem 3.0625rem 0rem;
    object-fit: cover;
    z-index: -1;
  }
`;

const StyledSectionForHeadSection = styled.section`
  margin: 10rem auto auto 20%;

  @media (max-width: 768px) {
    margin: 6rem auto 0rem 10%;
  }
`;

const StyledHeadline = styled.h1`
  color: white;
  font-size: var(--font-size-headline-mobile);

  @media (min-width: 768px) {
    font-size: var(--font-size-headline-desktop);
  }
`;

const StyledSecondHeadline = styled.h2`
  font-size: var(--font-size-small-headline-mobile);
  color: white;
  font-weight: var(--font-weight-medium);

  @media (min-width: 768px) {
    font-size: var(--font-size-small-headline-desktop);
  }
`;

const StyledSpan = styled.span`
  color: var(--color-primary-red);
  font-weight: var(--font-weight-bold);
`;

const StyledButtonWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem;

  @media (min-width: 768px) {
    width: 60%;
    margin: 7rem auto auto auto;
  }
  @media (min-width: 2000px) {
    margin-top: 18rem;
  }

  @media (max-width: 300px) {
    gap: 0.4rem;
  }
`;
