import {
  faArrowUp,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooterSection>
      <StyledScrollAndHelpSection>
        <StyledHelpArticle>
          <StyledH1>
            Brauchen Sie <StyledSpan>Hilfe?</StyledSpan>
          </StyledH1>

          <StyledIcon icon={faPhone} />
        </StyledHelpArticle>
        <StyledScrollToTopArticle>
          <StyledSecondHeadline>
            Zurück zur <StyledSpan>Startseite</StyledSpan>
          </StyledSecondHeadline>
          <StyledIcon icon={faArrowUp} />
        </StyledScrollToTopArticle>
      </StyledScrollAndHelpSection>
      <StyledSectionForFooter>
        <article>
          <h3>ProLens</h3>
          <StyledFooterAdressParagrap>
            Mustermannweg 1
            <br />
            12345 Musterstadt
          </StyledFooterAdressParagrap>
          <StyledPhoneAndMailArticle>
            <StyledFontAwesomeIcon icon={faPhone} />
            <StyledFooterParagrap>0800/779922</StyledFooterParagrap>
          </StyledPhoneAndMailArticle>
          <StyledPhoneAndMailArticle>
            <StyledFontAwesomeIcon icon={faMailBulk} />
            <StyledFooterParagrap>Prolens@lens.com</StyledFooterParagrap>
          </StyledPhoneAndMailArticle>
        </article>
        <article>
          <h3>Öffnungszeiten</h3>
          <StyledFooterParagrap>Montag - Freitag</StyledFooterParagrap>
          <StyledFooterParagrap>08:00 - 17:00 Uhr</StyledFooterParagrap>
          <br></br>
          <StyledFooterParagrap>Samstag</StyledFooterParagrap>
          <StyledFooterParagrap>09:00 - 12:00 Uhr</StyledFooterParagrap>
        </article>
        <article>
          <h3>Über die Firma</h3>
          <ul>
            <li>Impressum</li>
            <li>Karriere</li>
            <li>AGB</li>
            <li>Datenschutz</li>
          </ul>
        </article>
      </StyledSectionForFooter>
    </StyledFooterSection>
  );
}

//last section before footer

const StyledFooterSection = styled.section`
  background-color: white;
  height: 100%;
`;

const StyledScrollAndHelpSection = styled.section`
  background-color: var(--color-secondary-grey-backgroundsection);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin: auto auto 2rem auto;
`;

const StyledSpan = styled.span`
  color: var(--color-primary-red);
`;

const StyledIcon = styled(FontAwesomeIcon)`
  background-color: var(--color-primary-red);
  color: white;
  width: 2rem;
  height: 2rem;
  padding: 0.75rem;
  align-self: center;
  border-radius: 50%;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--color-primary-beidge-buttonhover);
    color: black;
    box-shadow: 0px 4px 14.4px -4px #b75c5c;
  }

  &:active {
    background-color: var(--color-primary-beidge-buttonhover);
    color: black;
    box-shadow: 0px 4px 14.4px -4px #b75c5c;
  }
`;

//first article
const StyledHelpArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled.h2`
  font-size: var(--font-size-small-headline-mobil);
  text-align: center;
  @media (min-width: 1280px) {
    font-size: var(--font-size-small-headline-desktop);
  }
`;

//second article
const StyledScrollToTopArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledSecondHeadline = styled.h2`
  font-size: var(--font-size-small-headline-mobil);
  text-align: center;
  @media (min-width: 1280px) {
    font-size: var(--font-size-small-headline-desktop);
  }
`;

//footer

const StyledSectionForFooter = styled.section`
  display: flex;
  justify-content: center;
  gap: 25%;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    margin: auto 5rem auto 5rem;
  }
  @media (min-width: 2000px) {
    margin: auto 20rem auto 20rem;
  }
`;

const StyledPhoneAndMailArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0rem;
  padding: 0rem;
`;

const StyledFooterParagrap = styled.p`
  margin: 0;
`;

const StyledFooterAdressParagrap = styled.p`
  margin-bottom: 1rem;
  padding: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: var(--color-primary-red);
  margin-right: 0.5rem;
  margin-top: 0;
`;
