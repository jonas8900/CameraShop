import styled from "styled-components";
import { TestimonialData } from "../../DataCollection";
import { useMediaQuery } from "../../Customhooks/useMediaQuery";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function CustomerTestimonial() {
  const isTablet = useMediaQuery(1440);

  // set three different states for the three different testimonials in the right order!
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const [thirdIndex, setThirdIndex] = useState(2);

  function handleDecreaseIndex() {
    setTestimonialIndex(
      (testimonialIndex - 1 + TestimonialData.length) % TestimonialData.length
    );
    setSecondIndex(
      (secondIndex - 1 + TestimonialData.length) % TestimonialData.length
    );
    setThirdIndex(
      (thirdIndex - 1 + TestimonialData.length) % TestimonialData.length
    );
  }
  function handleAddIndex() {
    setTestimonialIndex((testimonialIndex + 1) % TestimonialData.length);
    setSecondIndex((secondIndex + 1) % TestimonialData.length);
    setThirdIndex((thirdIndex + 1) % TestimonialData.length);
  }

  return (
    <StyledSection>
      <StyledIcon icon={faChevronLeft} onClick={handleDecreaseIndex} />
      {isTablet ? ( // mobile / tablet view
        <>
          {TestimonialData.filter(
            (testimonial, index) => index === testimonialIndex
          ).map((testimonial) => (
            <StyledArticle key={testimonial.id}>
              <StyledCircle>
                <StyledImage
                  src={testimonial.profilPicture}
                  alt="Profilbild"
                  width={100}
                  height={100}
                />
              </StyledCircle>
              <StyledName>{testimonial.name}</StyledName>
              <StyledDate>{testimonial.date}</StyledDate>
              <StyledTestimonialParagraph>
                {testimonial.testimonial}
              </StyledTestimonialParagraph>
            </StyledArticle>
          ))}
        </>
      ) : (
        //desktop view
        <>
          {TestimonialData.filter(
            // the filter function sorts the array so we need three filter or find functions to get the right order of the testimonials
            (testimonial, index) => index === testimonialIndex
          ).map((testimonial) => (
            <StyledArticle key={testimonial.id}>
              <StyledCircle>
                <StyledImage
                  src={testimonial.profilPicture}
                  alt="Profilbild"
                  width={100}
                  height={100}
                />
              </StyledCircle>
              <StyledName>{testimonial.name}</StyledName>
              <StyledDate>{testimonial.date}</StyledDate>
              <StyledTestimonialParagraph>
                {testimonial.testimonial}
              </StyledTestimonialParagraph>
            </StyledArticle>
          ))}
          {TestimonialData.filter(
            (testimonial, index) => index === secondIndex
          ).map((testimonial) => (
            <StyledArticle key={testimonial.id}>
              <StyledCircle>
                <StyledImage
                  src={testimonial.profilPicture}
                  alt="Profilbild"
                  width={100}
                  height={100}
                />
              </StyledCircle>
              <StyledName>{testimonial.name}</StyledName>
              <StyledDate>{testimonial.date}</StyledDate>
              <StyledTestimonialParagraph>
                {testimonial.testimonial}
              </StyledTestimonialParagraph>
            </StyledArticle>
          ))}
          {TestimonialData.filter(
            (testimonial, index) => index === thirdIndex
          ).map((testimonial) => (
            <StyledArticle key={testimonial.id}>
              <StyledCircle>
                <StyledImage
                  src={testimonial.profilPicture}
                  alt="Profilbild"
                  width={100}
                  height={100}
                />
              </StyledCircle>
              <StyledName>{testimonial.name}</StyledName>
              <StyledDate>{testimonial.date}</StyledDate>
              <StyledTestimonialParagraph>
                {testimonial.testimonial}
              </StyledTestimonialParagraph>
            </StyledArticle>
          ))}
        </>
      )}
      <StyledIcon
        icon={faChevronRight}
        onClick={() => handleAddIndex(testimonialIndex)}
      />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  @media (min-width: 1920px) {
    width: 100rem;
  }
  @media (max-width: 400px) {
    width: 70%;
  }
`;

const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "circle name date"
    "testimonial testimonial testimonial";
  width: 19rem;
  height: 22rem;
  background-color: white;
  margin: 5rem auto;
  border-radius: 18px;
  box-shadow: 0px 18px 80px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) {
    margin-top: 8rem;
    width: 26rem;
    height: 29rem;
  }
  @media (max-width: 400px) {
    height: 100%;
    grid-template-rows: 0.2fr 0.1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin-top: 0;
    grid-template-areas:
      "circle name"
      "date date"
      "testimonial testimonial ";
  }
`;

const StyledCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.5rem;
  width: 4.5rem;
  margin: 1rem auto auto 1rem;
  background: linear-gradient(
    139deg,
    #b75c5c 10.7%,
    rgba(111, 111, 111, 0.28) 86.34%
  );
  background-size: cover;
  background-position: center;
  border-radius: 50%;

  @media (min-width: 1024px) {
    height: 7rem;
    width: 7rem;
  }
`;

const StyledImage = styled(Image)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid
    linear-gradient(139deg, #b75c5c 10.7%, rgba(111, 111, 111, 0.28) 86.34%);
  margin: 0;
  padding: 0;

  @media (min-width: 1024px) {
    height: 6.5rem;
    width: 6.5rem;
  }
`;

const StyledName = styled.h3`
  grid-area: name;
  text-align: center;
  align-self: flex-start;
  margin-top: 30%;
  @media (min-width: 1024px) {
    font-size: var(--font-size-common-text-desktop);
  }
`;

const StyledTestimonialParagraph = styled.p`
  grid-area: testimonial;
  padding: 1rem;
  font-size: var(--font-size-smaller-text-mobile);
  font-weight: var(--font-weight-light);
  @media (min-width: 1024px) {
    align-self: flex-start;
    font-size: var(--font-size-smaller-text-desktop);
  }
`;

const StyledDate = styled.p`
  grid-area: date;
  text-align: center;
  align-self: center;
  @media (min-width: 1024px) {
    font-size: var(--font-size-smaller-text-desktop);
    font-weight: var(--font-weight-light);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  color: var(--color-secondary-grey-text);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: red;
  }
`;
