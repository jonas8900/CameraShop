import styled from "styled-components";

export default function ProductHighlight({ product }) {
  return (
    <section>
      <StyledHeadline>Highlights</StyledHeadline>
      <StyledList>
        {product &&
          product.highlights.map((highlight, index) => (
            <StyledListItems key={index}>{highlight}</StyledListItems>
          ))}
      </StyledList>
    </section>
  );
}

const StyledHeadline = styled.h2`
  text-align: center;
  margin: 10rem auto 4rem auto;
  font-size: var(--font-size-headline-mobile);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-red);
  @media (min-width: 1024px) {
    font-size: var(--font-size-sectionheadline-desktop);
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 8rem;
    width: 50%;
    margin: 4rem auto 8rem auto;
  }
`;

const StyledListItems = styled.li`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    linear-gradient(
      179deg,
      #aeaeae 0.48%,
      rgba(177, 165, 165, 0.44) 72.23%,
      rgba(128, 128, 130, 0.01) 110.87%
    );

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  margin: auto;

  color: var(--Color-4, #fff);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.01563rem;
`;
