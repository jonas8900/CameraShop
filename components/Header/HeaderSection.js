import NavigationBar from "@/components/Navigation/NavBar";
import styled from "styled-components";

export default function HeaderSection({ className, children }) {
  return (

    // The HeaderSection component is a wrapper for the NavigationBar and the picture component in the header.
    <StyledHeaderSection className={className}>
      <NavigationBar />
      {children}
    </StyledHeaderSection>
  );
}

const StyledHeaderSection = styled.header`
  margin: auto;
  min-height: 30vh;
  @media (min-width: 768px) {
    min-height: 75vh;
  }
`;
