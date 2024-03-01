import HeaderSection from "@/components/Header/HeaderSection";
import CustomerTestimonialSection from "@/components/Landingpage/Testimonials/CustomerTestimonialSection";
import OptionsToRent from "@/components/Landingpage/OptionsToRent";
import SectionTransition from "@/components/Landingpage/SectionTransition";
import LandingPageIntroduction from "@/components/Landingpage/introduction";
import styled from "styled-components";
import FaqCard from "@/components/Landingpage/FAQ/FaqCard";
import TechnicalProblems from "@/components/Landingpage/TechnicalProblems/TechnicalProblems";
import Footer from "@/components/Footer/Footer";


export default function Home({ productSelection, setProductSelection }) {

  return (
    <>
      <StyledHeaderSection />
      <StyledMain>
        <LandingPageIntroduction />
        <SectionTransition />
        <StyledSectionWrapper>
          <OptionsToRent productSelection={productSelection} setProductSelection={setProductSelection}/>
        </StyledSectionWrapper>
        <CustomerTestimonialSection />
        {/* to get the background effect and wrap the elements around the last 3 sections, i created the divs inside the index.html */}
        <StyledArticle>
          <StyledBackgroundDiv />
          <StyledSecondBackgroundDiv />
          <StyledThirdBackgroundDiv />
          <StyledFourthBackgroundDiv />
          <FaqCard />
          <TechnicalProblems />
        </StyledArticle>
        <Footer />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  min-width: size;
  @media (max-width: 400px) {
    overflow: hidden;
  }
`;

const StyledSectionWrapper = styled.section`
  width: 75%;
  margin: auto;
  @media (min-width: 1024px) {
    width: 60rem;
  }
  @media (min-width: 1280px) {
    width: 75rem;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyledHeaderSection = styled(HeaderSection)`
  background: url("/Backgroundpictures/Landingpage.jpg") lightgray 50% / cover
    no-repeat;
`;

const StyledArticle = styled.article`
  position: relative;
  overflow: hidden;

  padding-bottom: 8rem;
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
    width: 48.5625rem;
    height: 48.5625rem;
    border-radius: 48.5625rem;
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
