import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";

export default function LandingPageIntroduction() {
  return (
    <StyledSection>
      <StyledHeadline>
        Mach Schluss mit <StyledSpan>unscharfen</StyledSpan> Ideen!
      </StyledHeadline>
      <StyledSubheadline>
        Unser Equipment sorgt für den klaren Fokus
      </StyledSubheadline>
      <StyledOfferButton>Angebote</StyledOfferButton>
      <StyledParagraph>
        Bei uns kannst du hochwertige Kameras, beeindruckende Objektive und
        professionelle Lichtausrüstung mieten. Entdecke die Welt der visuellen
        Kreativität und mach jedes Projekt zu einem visuellen Erfolg mit unserer
        vielseitigen Ausrüstung
      </StyledParagraph>
      <StyledSubThirdHeadline>
        Du willst dich beraten lassen?
      </StyledSubThirdHeadline>
      <StyledContactParagraph>
        Dann kontaktiere uns direkt.
      </StyledContactParagraph>
      <StyledDiv>
        <Link href="tel: 0800/779922">
          <StyledIconButton icon={faPhone}></StyledIconButton>
        </Link>
        <Link href="mailto: Prolens@lens.com">
          <StyledIconButton icon={faEnvelope} />
        </Link>
      </StyledDiv>
      <StyledArticle>
        <StyledOpeningHeadline>Öffnungszeiten:</StyledOpeningHeadline>
        <StyledOpeningParagraph>
          Montag - Freitag <br />
          08:00 - 19:00 Uhr <br />
          Samstag
          <br /> 08:00 - 17:30 Uhr
        </StyledOpeningParagraph>
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 68%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "headline headline"
      "subheadline subheadline"
      "offerbutton paragraph"
      "subthirdheadline subthirdheadline"
      "contactparagraph article"
      "div article";
  }
  @media (min-width: 1024px) {
    width: 60rem;
  }
  @media (min-width: 1280px) {
    width: 67rem;
  }
`;

const StyledHeadline = styled.h1`
  font-size: var(--font-size-headline-mobile);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  grid-area: headline;
  @media (min-width: 1024px) {
    font-size: var(--font-size-headline-desktop);
    margin-bottom: 6rem;
  }
`;

const StyledSpan = styled.span`
  color: var(--color-primary-red);
  filter: blur(4px);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: none;
  }
  @media (min-width: 768px) {
  }
`;

const StyledSubheadline = styled.h2`
  font-size: var(--font-size-small-headline-mobile);
  font-weight: var(--font-weight-semibold);
  width: 80%;
  margin: auto;
  grid-area: subheadline;
  @media (min-width: 768px) {
    font-size: var(--font-size-greater-text-desktop);
    width: 60%;
    margin: auto auto auto 0rem;
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-small-headline-desktop);
    margin-bottom: 2rem;
  }
`;

const StyledSubThirdHeadline = styled.h3`
  font-size: var(--font-size-small-headline-mobile);
  font-weight: var(--font-weight-semibold);
  width: 100%;
  margin: 4rem auto 0 auto;
  grid-area: subthirdheadline;
  @media (min-width: 768px) {
    margin: 6rem auto auto 1rem;
    font-size: var(--font-size-greater-text-desktop);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-small-headline-desktop);
  }
`;

const StyledOfferButton = styled.button`
  width: 8rem;
  height: 2.5rem;
  background: var(--color-primary-red);
  box-shadow: 0px 4px 14.4px -4px var(--color-primary-red);
  border: none;
  color: white;
  font-size: var(--font-size-smaller-text-mobile);
  font-weight: var(--font-weight-regular);
  margin: 2rem auto;
  padding: auto;
  grid-area: offerbutton;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--color-primary-beidge-buttonhover);
    box-shadow: 0px 4px 14.4px -4px var(--color-primary-red);
    color: black;
  }

  @media (min-width: 768px) {
    margin: auto;
    width: 15rem;
    height: 4.5rem;
    font-size: var(--font-size-common-text-desktop);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: 2rem auto;
  grid-area: div;
  @media (min-width: 768px) {
    gap: 6rem;
  }
`;

const StyledIconButton = styled(FontAwesomeIcon)`
  width: 2rem;
  height: 2rem;
  background: var(--color-primary-red);
  box-shadow: 0px 4px 14.4px -4px var(--color-primary-red);
  border: none;
  color: white;
  font-size: var(--font-size-smaller-text-mobile);
  font-weight: var(--font-weight-regular);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 1rem;
  &:hover {
    background: var(--color-primary-beidge-buttonhover);
    box-shadow: 0px 4px 14.4px -4px var(--color-primary-red);
    color: black;
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-smaller-text-desktop);
    width: 3rem;
    height: 3rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: var(--font-size-common-text-mobile);
  font-weight: var(--font-weight-regular);
  grid-area: paragraph;
  @media (min-width: 768px) {
    font-size: var(--font-size-small-text-desktop);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-greater-text-desktop);
  }
`;

const StyledContactParagraph = styled.p`
  font-size: var(--font-size-common-text-mobile);
  font-weight: var(--font-weight-regular);
  grid-area: contactparagraph;
  @media (min-width: 768px) {
    margin: 0 auto auto 1rem;
    font-size: var(--font-size-small-text-desktop);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-greater-text-desktop);
  }
`;

const StyledOpeningParagraph = styled.p`
  font-size: var(--font-size-common-text-mobile);
  font-weight: var(--font-weight-regular);
  @media (min-width: 1024px) {
    font-size: var(--font-size-greater-text-desktop);
  }
`;

const StyledOpeningHeadline = styled.h5`
  color: var(--Extra-Colors, #b75c5c);
  font-size: var(--font-size-greater-text-mobile);
  margin: 0;
  @media (min-width: 1024px) {
    font-size: var(--font-size-small-headline-desktop);
  }
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 1.125rem;
  background: #d9d9d9;
  width: 80%;
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
  margin: 2rem auto 2rem auto;
  padding-left: 1.5rem;
  padding-top: 1rem;
  width: 14rem;
  grid-area: article;
  @media (min-width: 1024px) {
    width: 20rem;
    margin: 0 auto 2rem auto;
  }
`;
