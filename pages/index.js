import SectionTransition from "@/components/Landingpage/SectionTransition";
import LandingPageIntroduction from "@/components/Landingpage/introduction";
import NavigationBar from "@/components/Navigation/NavBar";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <StyledHeaderSection>
        <NavigationBar />
      </StyledHeaderSection>
      <StyledMain>
        <LandingPageIntroduction />
        <SectionTransition />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main``;

const StyledHeaderSection = styled.header`
  background: url("/Backgroundpictures/Landingpage.jpg") lightgray 50% / cover
    no-repeat;
  margin: auto;
  min-height: 30vh;
  @media (min-width: 768px) {
    min-height: 75vh;
  }
`;
