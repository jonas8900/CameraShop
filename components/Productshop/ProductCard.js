import Image from "next/image";
import styled from "styled-components";

export default function ProductCard({
  specialization,
  available,
  price,
  title,
  model,
  imageUrl,
}) {
  return (
    <StyledSection>
      <StyledProductImageDiv imageUrl={imageUrl} />
      <StyledInformationArticle>
        <StyledInformationHeadline>{title}</StyledInformationHeadline>
        <StyledInformationModel>{model}</StyledInformationModel>
        <StyledShowMoreButton>Konfigurieren</StyledShowMoreButton>
        <StyledInformationSpecialization>
          am besten geeignet für: <StyledSpan>{specialization}</StyledSpan>
        </StyledInformationSpecialization>
        <StyledInformationAvailability>
          Verfügbar:
          <StyledAvailableDiv available={available}></StyledAvailableDiv>
        </StyledInformationAvailability>
        <StyledInformationPrice>
          {price},00 €
          <StyledPriceSpan>/pro Tag</StyledPriceSpan>
        </StyledInformationPrice>
      </StyledInformationArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  border-radius: 0.5625rem;
  background: #fff;
  box-shadow: 4px 7px 40.9px -3px var(--Color-2, #808082);
  width: 18.625rem;
  height: 22.0625rem;
  flex-shrink: 0;
  margin: auto;
  position: relative;

  @media (min-width: 1024px) {
    width: 23.9375rem;
    height: 30.3125rem;
  }
`;

const StyledProductImageDiv = styled.div`
  width: 100%;
  height: 52%;
  border-radius: 0.5625rem 0.5625rem 3.1875rem 0rem;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(${({ imageUrl }) => `"` + imageUrl + `"`}) center/60% no-repeat;

  @media (min-width: 1024px) {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(${({ imageUrl }) => `"` + imageUrl + `"`}) center/65% no-repeat;
  }
`;

const StyledInformationArticle = styled.article`
  width: 100%;
  height: 48%;
  max-height: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  display: grid;

  grid-template-rows: 0.5fr 0.5fr 0.1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "headline button"
    "headlinemodel button"
    "information information"
    "isavailable price";

  * {
    padding: 0;
    margin: 0;
  }

  h3 {
    padding: 1rem;
    padding-bottom: 0;
  }
  h4 {
    padding-left: 1rem;
  }
`;

const StyledInformationHeadline = styled.h3`
  font-size: 0.9375;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-red);

  grid-area: headline;

  @media (min-width: 1024px) {
    font-size: var(--font-size-small-headline-desktop);
  }
`;

const StyledInformationModel = styled.h4`
  font-size: var(--font-size-smaller-text-mobile);
  font-weight: var(--font-weight-light);
  grid-area: headlinemodel;

  @media (min-width: 1024px) {
    font-size: var(--font-size-common-text-desktop);
  }
`;

const StyledShowMoreButton = styled.button`
  width: 8.5rem;
  height: 2.5rem;
  background: var(--color-primary-red);
  box-shadow: 0px 4px 14.4px -4px var(--color-primary-red);
  border: none;
  color: white;
  font-size: var(--font-size-smaller-text-mobile);
  font-weight: var(--font-weight-regular);
  margin: 2rem 1rem;
  padding: auto;
  grid-area: button;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--color-primary-beidge-buttonhover);
    box-shadow: 0px 4px 14.4px -4px var(--color-primary-red);
    color: black;
  }

  @media (min-width: 1024px) {
    width: 10rem;
    height: 3rem;
    font-size: var(--font-size-smallest-text-desktop);
    box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
    margin: 2rem 1rem 0rem 1rem;
  }
`;

const StyledInformationSpecialization = styled.p`
  align-self: center;
  margin: 0;
  font-size: 0.8rem;
  padding-left: 1rem;
  font-weight: var(--font-weight-light);
  color: var(--color-secondary-grey-text);
  grid-area: information;

  @media (min-width: 1024px) {
    font-size: var(--font-size-smallest-text-desktop);
    margin-top: 2rem;
  }
`;

const StyledSpan = styled.span`
  color: var(--color-primary-red);
  font-weight: var(--font-weight-bold);
`;

const StyledInformationAvailability = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0rem;
  font-size: var(--font-size-smaller-text-mobile);
  font-weight: var(--font-weight-light);
  gap: 0.3rem;
  grid-area: isavailable;

  @media (min-width: 1024px) {
    font-size: var(--font-size-smaller-text-desktop);
    gap: 0.5rem;
    margin: 1rem auto 0 1rem;
    justify-content: flex-start;
  }
`;

const StyledAvailableDiv = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: var(
    ${({ available }) =>
      available
        ? "--color-secondary-green-available"
        : "--color-secondary-red-unavailable"}
  );
  border-radius: 50%;
`;

const StyledInformationPrice = styled.p`
  font-size: var(--font-size-greater-text-mobile);
  color: black;
  grid-area: price;
  justify-self: center;
  margin: auto auto 0.4rem auto;

  @media (min-width: 1024px) {
    font-size: var(--font-size-small-headline-desktop);
  }
`;

const StyledPriceSpan = styled.span`
  font-size: var(--font-size-smallest-text-mobile);
  color: var(--color-secondary-grey-text);
`;
