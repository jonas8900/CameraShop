import styled from "styled-components";

export default function BackgroundWrapper() {
  return (
    <StyledDiv>
      <StyledBackgroundDiv />
      <StyledSecondBackgroundDiv />
      <StyledThirdBackgroundDiv />
      <StyledFourthBackgroundDiv />
    </StyledDiv>
  );
}

//safe for later use in the index.html file to add the background elements

const StyledDiv = styled.div`
  overflow: hidden;
  position: absolute;
`;

const StyledBackgroundDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: 0rem;
  left: -10rem;
  width: 21.375rem;
  height: 21.375rem;
  flex-shrink: 0;
  border-radius: 21.375rem;
  background: rgba(244, 217, 217, 0.29);
  @media (min-width: 1024px) {
    width: 48.5625rem;
    height: 48.5625rem;
    border-radius: 48.5625rem;
  }
`;
const StyledSecondBackgroundDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: 25rem;
  right: -10rem;
  width: 21.375rem;
  height: 21.375rem;
  flex-shrink: 0;
  border-radius: 21.375rem;
  background: rgba(244, 217, 217, 0.29);
  @media (min-width: 1024px) {
    width: 48.5625rem;
    height: 48.5625rem;
    border-radius: 48.5625rem;
  }
`;
const StyledThirdBackgroundDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: -10rem;
  width: 21.375rem;
  height: 21.375rem;
  flex-shrink: 0;
  border-radius: 21.375rem;
  background: rgba(244, 217, 217, 0.29);
  @media (min-width: 1024px) {
    display: none;
  }
`;
const StyledFourthBackgroundDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: 80%;
  left: 4rem;
  width: 21.375rem;
  height: 21.375rem;
  flex-shrink: 0;
  border-radius: 21.375rem;
  background: rgba(244, 217, 217, 0.29);
  @media (min-width: 1024px) {
    width: 48.5625rem;
    height: 48.5625rem;
    border-radius: 48.5625rem;
    left: 60%;
    right: -5rem;
  }
`;
