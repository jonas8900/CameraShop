import styled, { keyframes, css } from "styled-components";

export default function Hamburger({ menuClicked, setMenuClicked }) {
  function handleOpenMenu() {
    setMenuClicked(!menuClicked);
  }

  return (
    <StyledList $menuclicked={menuClicked} onClick={handleOpenMenu}>
      <li></li>
      <li></li>
      <li></li>
    </StyledList>
  );
}

const Hidden = keyframes`
    0% {  
        opacity: 1;
    }
    10% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const Visible = keyframes`
    0% {
        opacity: 0;
    }
    30% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const StyledList = styled.ul`
  position: fixed;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
  cursor: pointer;
  padding: 2rem;
  z-index: 1;
  right: 1rem;
  top: 1rem;
  margin: auto;

  li {
    width: 2rem;
    background-color: ${({ $menuclicked }) =>
      $menuclicked ? "white" : "var(--color-primary-red)"};
    height: 0.25rem;
    border-radius: 5px;
    transform-origin: 3px;
    transition: transform 0.2s linear;

    &:nth-child(1) {
      transform: ${({ $menuclicked }) =>
        $menuclicked ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      animation: ${({ $menuclicked }) => ($menuclicked ? Hidden : Visible)} 0.3s
        linear;
      opacity: ${({ $menuclicked }) => ($menuclicked ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ $menuclicked }) =>
        $menuclicked ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;
