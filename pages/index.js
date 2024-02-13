import NavigationBar from "@/components/Navigation/NavBar";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledMain>
      <StyledHeaderSection>
        <NavigationBar />
      </StyledHeaderSection>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin: 0;
  padding: 0;
`;

const StyledHeaderSection = styled.header`
  background: url("/Backgroundpictures/Landingpage.jpg") lightgray 50% / cover
    no-repeat;
  margin: auto;
  min-height: 30vh;
  @media (min-width: 768px) {
    min-height: 75vh;
  }
`;
