import Image from "next/image";
import { CategoryCardData } from "../DataCollection";
import styled from "styled-components";
import Link from "next/link";

export default function OptionsToRent() {
  return (
    <>
      <StyledHeadline>Wähle aus was du dir anschauen möchtest</StyledHeadline>
      <StyledSubHeadline>
        Entdecken Sie unsere breite Palette an Kameras, Objektiven und Lichtern,
        die Ihnen helfen, jedes Projekt mit professioneller Qualität und
        Präzision zu verwirklichen.
      </StyledSubHeadline>
      <StyledList>
        {CategoryCardData.map((category) => (
          <StyledListItem key={category.title}>
            <Link href="#">
              <StyledImage
                src={category.image}
                alt={category.title}
                width={300}
                height={300}
                loading="lazy"
              />
              <StyledParagraph>{category.title}</StyledParagraph>
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
  padding: 0;

  @media (min-width: 1024px) {
    gap: 8rem;
    margin: 8rem auto;
  }
`;

const StyledListItem = styled.li`
  position: relative;
  width: 12rem;
  height: 10rem;
  border-radius: 18px;
  box-shadow: 0px 4px 47.5px -3px #bab5b5;
  background-color: #ffffff;
  cursor: pointer;
  &:active p {
    visibility: hidden;
  }

  &:hover p {
    visibility: hidden;
  }
  @media (min-width: 1024px) {
    width: 18rem;
    height: 16rem;
  }
`;

const StyledParagraph = styled.p`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-size-sectionheadline-mobile);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-red);

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  opacity: 0.1;
  transition: all 0.3s ease-in-out;
  &:active {
    opacity: 1;
    box-shadow: 0px 4px 47.5px -3px var(--color-primary-red);
  }
  &:hover {
    opacity: 1;
    box-shadow: 0px 4px 47.5px -3px var(--color-primary-red);
  }
`;

const StyledHeadline = styled.h1`
  font-size: var(--font-size-small-headline-mobile);
  font-weight: var(--font-weight-semibold);
  margin: 4rem auto;
  text-align: center;
  @media (min-width: 768px) {
    font-size: var(--font-size-greater-text-desktop);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-small-headline-desktop);
    margin-top: 8rem;
  }
`;

const StyledSubHeadline = styled.h2`
  font-size: var(--font-size-smaller-text-mobile);
  font-weight: var(--font-weight-light);
  margin: 2rem auto auto auto;
  text-align: center;
  @media (min-width: 768px) {
    font-size: var(--font-size-small-text-desktop);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-common-text-desktop);
  }
`;
