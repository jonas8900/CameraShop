import HeaderSection from "@/components/Header/HeaderSection";
import CustomerTestimonialSection from "@/components/Landingpage/Testimonials/CustomerTestimonialSection";
import OptionsToRent from "@/components/Landingpage/OptionsToRent";
import SectionTransition from "@/components/Landingpage/SectionTransition";
import LandingPageIntroduction from "@/components/Landingpage/introduction";
import NavigationBar from "@/components/Navigation/NavBar";
import styled from "styled-components";
import FaqCard from "@/components/Landingpage/FAQ/FaqCard";
import TechnicalProblems from "@/components/Landingpage/TechnicalProblems/TechnicalProblems";


export default function Home() {
  return (
    <>
      <StyledHeaderSection />
      <StyledMain>
        <LandingPageIntroduction />

        <SectionTransition />
        <StyledSectionWrapper>
          <OptionsToRent />
        </StyledSectionWrapper>
        <CustomerTestimonialSection />

        <FaqCard />
        <TechnicalProblems />
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
    width: 75rem;
  }
`;

const StyledHeaderSection = styled(HeaderSection)`
  background: url("/Backgroundpictures/Landingpage.jpg") lightgray 50% / cover
    no-repeat;
`;
