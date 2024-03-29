import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "../Customhooks/useMediaQuery";
import Link from "next/link";

export default function NavigationBar({className}) {
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
          <Hamburger
            setMenuClicked={setMenuClicked}
            menuClicked={menuClicked}
          />
          {animationEnd && (
            <StyledSection $menuclicked={menuClicked}>
              <StyledList>
                <StyledLink href="/">
                  <li>Home</li>
                </StyledLink>
                <StyledLink href="/products">
                  <li>Produkte</li>
                </StyledLink>
                <StyledLink href="/offers">
                  <li>Angebote</li>
                </StyledLink>
                <StyledLink href="/contact">
                  <li>Kontakt</li>
                </StyledLink>
                <li>Login</li>
                <li>Icon</li>
              </StyledList>
            </StyledSection>
          )}
        </>
      ) : (
        <StyledList>
          <StyledLink href="/">
            <li>Home</li>
          </StyledLink>
          <StyledLink href="/products">
            <li>Produkte</li>
          </StyledLink>
          <StyledLink href="/offers">
            <li>Angebote</li>
          </StyledLink>
          <StyledLink href="/contact">
            <li>Kontakt</li>
          </StyledLink>
        </StyledList>
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
      color: white;
      border: none;
      text-shadow: 0px 4px 20.5px rgba(255, 255, 255, 0.25);
      line-height: normal;
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-size-small-headline-desktop);
      transition: color 0.2s ease-in-out;

      &:hover {
        color: var(--color-primary-red);
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
