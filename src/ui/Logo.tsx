import styled from "@emotion/styled";

const StyledLogo = styled.div`
  display: flex;
  height: 40px;
  padding: 16px 24px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  border-bottom: 1px solid var(--gray-200, #c8c6d0);
  background: var(--base-white, #fff);
`;

const StyledTitle = styled.h2`
  color: #272343;

  /* Heading/H2 */
  font-family: Basier Square;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function Logo() {
  return (
    <StyledLogo>
      <StyledTitle>BORD</StyledTitle>
    </StyledLogo>
  );
}

export default Logo;
