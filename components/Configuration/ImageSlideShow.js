import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function ImageSlideShow({ product }) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleLeftButton() {
    if (product) {
      setCurrentImage(
        (product.imageslideshow.length + currentImage - 1) %
          product.imageslideshow.length
      );
    }
  }

  function handleRightButton() {
    if (product) {
      setCurrentImage((currentImage + 1) % product.imageslideshow.length);
    }
  }

  return (
    <>
      {product && (
        <>
          <StyledImage
            src={product.imageslideshow[currentImage]}
            alt={product.title}
            width={1920}
            height={1080}
          />
          <StyledButtonArticle>
            <StyledButton onClick={handleLeftButton}>
              <StyledIcon icon={faChevronLeft} />
            </StyledButton>
            <StyledButton onClick={handleRightButton}>
              <StyledIcon icon={faChevronRight} />
            </StyledButton>
          </StyledButtonArticle>
        </>
      )}
    </>
  );
}

const StyledButtonArticle = styled.article`
  display: flex;
  gap: 50%;
  margin: 2rem auto;
  padding: 0;
  @media (min-width: 1024px) {
    gap: 0;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  width: 2rem;
  height: 2rem;
  margin: auto;
  color: white;
  @media (min-width: 1024px) {
    width: 3rem;
    height: 3rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: var(--color-primary-red);
  border: none;
  margin: auto;
  padding: 0;
  cursor: pointer;

  &:active {
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.9);
  }

  @media (min-width: 1024px) {
    width: 4rem;
    height: 4rem;
  }
`;

const StyledImage = styled(Image)`
  display: flex;
  margin: 3rem auto;
  width: 80%;
  height: 80%;
  border-radius: 0.5rem;
  @media (min-width: 1024px) {
    width: 40%;
    height: 40%;
  }
`;
