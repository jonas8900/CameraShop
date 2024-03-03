import styled from "styled-components";

export default function ProductSelectButton({ children, onClick }) {
  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  width: 10rem;
  height: 2.7rem;
  background: var(--color-primary-red);
  box-shadow: 0px 4px 14.4px -4px var(--color-primary-red);
  border: none;
  color: white;
  font-size: var(--font-size-common-text-mobile);
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

  &:active {
    background: var(--color-primary-beidge-buttonhover);
    box-shadow: 0px 4px 14.4px -4px var(--color-primary-red);
    color: black;
  }

  @media (min-width: 768px) {
    width: 16rem;
    height: 5rem;
    font-size: var(--font-size-small-headline-desktop);
    font-weight: var(--font-weight-semibold);
  }
`;
