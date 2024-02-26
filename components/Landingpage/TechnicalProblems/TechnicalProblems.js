import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function TechnicalProblems() {
  return (
    <StyledSection>
      <StyledHeadline>
        Technische <StyledSpan>Probleme</StyledSpan> mit Ihrem Gerät?
      </StyledHeadline>
      <StyledParagraph>
        Unser Support-Team steht Ihnen telefonisch zur Verfügung, um Ihnen bei
        Fragen oder im Falle eines Gerätedefekts weiterzuhelfen. Bitte
        kontaktieren Sie uns unter 0800/779922, um sofortige Unterstützung zu
        erhalten. Bei allgemeinen Fragen zur Bedienung unserer Geräte bitten wir
        Sie, in den beigefügten Mails und Gebrauchsanweisungen nachzusehen, wo
        umfassende Informationen für eine reibungslose Nutzung bereitstehen. Wir
        sind stets bemüht, Ihnen ein nahtloses und sorgenfreies Erlebnis mit
        unserer Ausrüstung zu gewährleisten
      </StyledParagraph>
      <StyledArticle>
        <StyledIcon icon={faHeadset} />
        <StyledSecondHeadline>24/7 Support</StyledSecondHeadline>
        <StyledSecondParagraph>Tel. 0800/779922</StyledSecondParagraph>
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--Extra-Colors, #b75c5c);
  margin: auto;
  padding: 0;
  @media (min-width: 1024px) {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-rows: 0.6fr 0.5fr;
    grid-template-columns: 1fr 1fr;

    grid-template-areas:
      "headline article"
      "paragraph article";
  }
  @media (min-width: 1280px) {
    grid-template-rows: 0.3fr 0.5fr;
    grid-template-columns: 1fr 0.6fr;
    grid-template-areas:
      "headline headline"
      "paragraph article";
  }

  @media (min-width: 1600px) {
    grid-template-rows: 0.3fr 0.5fr;
    grid-template-columns: 1fr 0.6fr;
    grid-template-areas:
      "headline article"
      "paragraph article";
  }

  @media (min-width: 2000px) {
    width: 60%;
    padding: 2rem;
  }
`;

const StyledHeadline = styled.h1`
  grid-area: headline;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3rem 1rem 1rem 1rem;
  font-size: var(--font-size-headline-mobile);
  @media (min-width: 1280px) {
    font-size: var(--font-size-headline-desktop);
    margin: 3rem 3rem 3rem 5rem;
  }
`;

const StyledParagraph = styled.p`
  grid-area: paragraph;
  margin: 2rem 1.5rem 4rem 1.5rem;
  font-weight: var(--font-weight-extralight);
  color: #fff;
  @media (min-width: 1280px) {
    font-size: var(--font-size-common-text-desktop);
    margin: 3rem 3rem 5rem 5rem;
  }
`;

const StyledArticle = styled.article`
  grid-area: article;
  margin: auto;
  margin-bottom: 3rem;
  padding: 1rem;
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
  @media (min-width: 1024px) {
    width: 40%;
    height: 40%;
    min-width: 25rem;
    min-height: 17rem;
    margin: auto;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  width: 4rem;
  height: 4rem;
  margin: auto auto 0rem auto;
`;

const StyledSecondHeadline = styled.h2`
  color: white;
  margin: auto;
  padding: 1rem;
`;

const StyledSecondParagraph = styled.p`
  color: white;
  margin: auto;
  font-size: var(--font-size-subheadline-mobile);
`;

const StyledSpan = styled.span`
  color: black;
`;
