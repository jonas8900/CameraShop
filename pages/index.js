import HeaderSection from "@/components/Header/HeaderSection";
import OptionsToRent from "@/components/Landingpage/OptionsToRent";
import SectionTransition from "@/components/Landingpage/SectionTransition";
import LandingPageIntroduction from "@/components/Landingpage/introduction";
import NavigationBar from "@/components/Navigation/NavBar";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <StyledHeaderSection />
      <StyledMain>
        <StyledSectionWrapper>
          <LandingPageIntroduction />
        </StyledSectionWrapper>
        <SectionTransition />
        <StyledSectionWrapper>
          <OptionsToRent />
        </StyledSectionWrapper>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main``;

const StyledSectionWrapper = styled.section`
  width: 75%;
  margin: auto;
  @media (min-width: 1024px) {
    width: 60rem;
  }
  @media (min-width: 1280px) {
    width: 67rem;
  }
`;

const StyledHeaderSection = styled(HeaderSection)`
  background: url("/Backgroundpictures/Landingpage.jpg") lightgray 50% / cover
    no-repeat;
`;
