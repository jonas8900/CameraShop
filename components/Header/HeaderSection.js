import NavigationBar from "@/components/Navigation/NavBar";
import styled from "styled-components";

export default function HeaderSection({ className, children }) {
  return (
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
