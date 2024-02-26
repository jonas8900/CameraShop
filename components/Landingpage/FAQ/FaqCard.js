import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaqData } from "@/components/DataCollection";
import BackgroundWrapper from "../BackgroundWrapper";

export default function FaqCard() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <StyledSectionWrapper>
        <StyledHeadline>FAQ ?</StyledHeadline>
        <StyledParagraph>
          Entdecken Sie die Antworten auf häufig gestellte Fragen unserer Kunden
          – eine kompakte Wissensquelle für alle Aspekte unseres Services und
          unserer Produkte
        </StyledParagraph>
        <StyledSectionFaqCardWrapper>
          {FaqData.map((faq, index) => (
            <StyledSection
              key={index}
              onMouseOver={() => {
                setOpenFaq(index);
              }}
              onMouseLeave={() => {
                setOpenFaq(null);
              }}
              onTouchStart={() => setOpenFaq(index)}
              onTouchEnd={() => setOpenFaq(null)}
              $openFaq={openFaq === index ? true : false}>
              {openFaq === index ? (
                <StyledSectionForOpenFaq $openFaq={openFaq}>
                  <StyledIconWhileOpen icon={faq.iconName} />
                  <StyledHeadlineWhileOpen>
                    {faq.headlineWhileOpen}
                  </StyledHeadlineWhileOpen>
                  <StyledParagraphWhileOpen>
                    {faq.paragraphWhileOpen}
                  </StyledParagraphWhileOpen>
                </StyledSectionForOpenFaq>
              ) : (
                <StyledIconAndHeadlineWrapper>
                  <StyledIcon icon={faq.iconName} />
                  <StyledSecondHeadline>{faq.headline}</StyledSecondHeadline>
                </StyledIconAndHeadlineWrapper>
              )}
            </StyledSection>
          ))}
        </StyledSectionFaqCardWrapper>
      </StyledSectionWrapper>
    </>
  );
}

const ShadowAnimationStart = keyframes`

  0% {
    -webkit-box-shadow: 0px 4px 29.9px 4px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 4px 29.9px 4px rgba(0, 0, 0, 0.25);
  }
  50% { 
    -webkit-box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.15);
            box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.1);
  }

  55% {

    -webkit-box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
            box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
  }
`;

const ShadowAnimationEnd = keyframes`

  0% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
            box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
  }

  50% {
    -webkit-box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.1);
            box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.1);
  }
  55% {
    -webkit-box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
  }
  100% {
    -webkit-box-shadow: 0px 4px 29.9px 4px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 4px 29.9px 4px rgba(0, 0, 0, 0.25);
  }
`;

const OpacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledSectionWrapper = styled.section`
  margin: 10rem auto;
  position: relative;
  overflow: hidden;
  @media (min-width: 1024px) {
    height: 100%;
  }
`;

const StyledSectionFaqCardWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin: 10% auto;
  @media (min-width: 1024px) {
    width: 80%;
    margin: 4rem auto;
    justify-content: center;
  }
  @media (min-width: 2000px) {
    width: 60%;
  }
`;

const StyledSection = styled.section`
  margin: 2rem auto;
  width: 18rem;
  height: 16rem;
  background: white;
  cursor: pointer;
  animation: ${({ $openFaq }) =>
    $openFaq ? ShadowAnimationStart : ShadowAnimationEnd};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  @media (min-width: 1024px) {
    width: 26rem;
    height: 22rem;
    margin: 2rem;
  }
`;

const StyledHeadline = styled.h1`
  margin: 4rem 4rem 2rem 4rem;
  font-size: var(--font-size-sectionheadline-mobile);
  color: var(--color-primary-red);
  @media (min-width: 1024px) {
    margin: 10rem 10rem 2rem 20rem;
    font-size: var(--font-size-headline-desktop);
  }
  @media (min-width: 2000px) {
    margin: 10rem 10rem 2rem 40rem;
  }
`;

const StyledParagraph = styled.p`
  margin: 2.5rem;
  font-size: var(--font-size-common-text-mobile);
  font-weight: var(--font-weight-light);
  @media (min-width: 1024px) {
    font-size: var(--font-size-common-text-desktop);
    font-weight: 200;
    max-width: 40%;
    margin: 0rem 10rem 2rem 18rem;
  }
  @media (min-width: 2000px) {
    margin: 0rem 10rem 2rem 38rem;
  }
`;

//icon and headline first view
const StyledIconAndHeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;

  color: var(--color-secondary-grey-text);
  top: 1rem;
  left: 1rem;
  width: 2.5rem;
  height: 2.5rem;

  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;
  }
`;

const StyledSecondHeadline = styled.h2`
  color: var(--color-primary-red);
  font-size: var(--font-size-sectionheadline-mobile);
  font-weight: var(--font-weight-bold);
  text-align: center;
  @media (min-width: 1024px) {
    font-size: var(--font-size-subheadline-desktop);
  }
`;

const StyledIconWhileOpen = styled(FontAwesomeIcon)`
  color: var(--color-secondary-grey-text);
  margin: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  grid-area: icon;

  @media (min-width: 1024px) {
    width: 3rem;
    height: 3rem;
  }
`;

const StyledHeadlineWhileOpen = styled.h2`
  grid-area: headline;
  font-size: var(--font-size-smaller-text-mobile);
  margin-right: 0.5rem;
  @media (min-width: 1024px) {
    font-size: var(--font-size-common-text-desktop);
  }
`;

const StyledParagraphWhileOpen = styled.p`
  grid-area: paragraph;
  font-size: 13px;
  padding: 0rem 0.7rem 0rem 0.7rem;
  @media (min-width: 1024px) {
    font-size: var(--font-size-smallest-text-desktop);
    padding: 1rem;
  }
`;

const StyledSectionForOpenFaq = styled.section`
  display: grid;
  gap: 0;
  grid-template-rows: 0.2fr 1fr;
  grid-template-columns: 0.2fr 1fr;
  grid-template-areas:
    "icon headline"
    "paragraph paragraph";
  animation: ${OpacityAnimation} 0.4s ease-in-out;
`;
