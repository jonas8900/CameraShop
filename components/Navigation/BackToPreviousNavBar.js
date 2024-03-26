import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "../Customhooks/useMediaQuery";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function BackToPreviousNavBar({ className }) {
  const [menuClicked, setMenuClicked] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);

  //custom hook to check if the screen is mobile and use the custom hook because the useMediaQuery hook is not working on nextjs as it should
  const isMobile = useMediaQuery(768);

  useEffect(() => {
    if (!menuClicked) {
      const timer = setTimeout(() => {
        setAnimationEnd(false);
      }, 450);
      return () => clearTimeout(timer);
    } else {
      setAnimationEnd(true);
    }
  }, [menuClicked]);

  return (
    <StyledNav className={className}>
      {isMobile ? (
        <>
          <StyledArticle>
            <StyledLink href="/products">
              <StyledGoBackIcon icon={faCircleArrowLeft} />
            </StyledLink>
            <StyledBackToPreviousHeadline>
              Zurück zur Produktübersicht
            </StyledBackToPreviousHeadline>
          </StyledArticle>
          <Hamburger
            setMenuClicked={setMenuClicked}
            menuClicked={menuClicked}
          />
          {animationEnd && (
            <StyledSection $menuclicked={menuClicked}>
              <StyledList>
                <li>Login</li>
                <li>
                  <FontAwesomeIcon icon={faCartShopping} />
                </li>
              </StyledList>
            </StyledSection>
          )}
        </>
      ) : (
        <StyledDesktopSection>
          <StyledArticle>
            <StyledLink href="/products">
              <StyledGoBackIcon icon={faCircleArrowLeft} />
            </StyledLink>
            <StyledBackToPreviousHeadline>
              Zurück zur Produktübersicht
            </StyledBackToPreviousHeadline>
          </StyledArticle>
          <StyledList>
            <StyledLink href="#">
              <li>Login</li>
            </StyledLink>
            <StyledLink href="#">
              <li>
                <FontAwesomeIcon icon={faCartShopping} />
              </li>
            </StyledLink>
          </StyledList>
        </StyledDesktopSection>
      )}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

//mobile view
const FadeIn = keyframes`
0% {transform: translateX(100%);} 
100% {transform: translateX(0);}
`;

const FadeOut = keyframes`
0% { transform: translateX(0); }
100% { transform: translateX(100%); }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 6rem 4rem;
  li {
    font-size: var(--font-size-sectionheadline-mobile);
    font-weight: var(--font-weight-regular);
    padding: 1rem;
    color: white;
    border-bottom: 1px solid var(--color-primary-red);
    cursor: pointer;

    &:active {
      color: var(--color-primary-red);
    }
  }

  //desktop view

  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
    justify-content: flex-start;
    margin: 0;
    padding: 2rem 6rem;

    li {
      color: var(--color-primary-red);
      border: none;
      text-shadow: 0px 4px 20.5px rgba(255, 255, 255, 0.25);
      line-height: normal;
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-size-small-headline-desktop);
      transition: color 0.2s ease-in-out;

      &:hover {
        color: black;
      }
    }

    @media (min-width: 1400px) {
      padding: 2rem 12rem;
    }
  }
`;

const StyledSection = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  background: linear-gradient(
    165deg,
    #525253 100%,
    rgba(189, 189, 189, 0.95) 90.45%
  );
  animation: ${({ $menuclicked }) => ($menuclicked ? FadeIn : FadeOut)} 0.5s
    ease-in-out;
`;

const StyledArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 4rem 2rem 0 2rem;
  @media (min-width: 1024px) {
    margin-top: 0rem;
  }
`;

const StyledGoBackIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: var(--color-primary-red);
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const StyledDesktopSection = styled.section`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem 2rem;
  }
`;

const StyledBackToPreviousHeadline = styled.h1`
  font-size: var(--font-size-subheadline-mobile);
  font-weight: var(--font-weight-semibold);
  @media (min-width: 1024px) {
    font-size: var(--font-size-small-headline-desktop);
    font-weight: var(--font-weight-semibold);
  }
`;
