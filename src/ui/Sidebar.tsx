import styled from "@emotion/styled";
import Logo from "./Logo";
import MainNav from "./MainNav";
import FooterNav from "./FooterNav";

const StyledSidbar = styled.aside`
  max-height: 100vh;
  width: 270px;
  grid-row: 1 / -1;
  border-right: 1px solid var(--gray-200, #c8c6d0);
`;

function Sidebar() {
  return (
    <StyledSidbar>
      <Logo />
      <MainNav />
      <FooterNav />
    </StyledSidbar>
  );
}

export default Sidebar;
