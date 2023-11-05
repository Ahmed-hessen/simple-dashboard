import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const FooterLinks = styled("div")`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-top: 1px solid var(--gray-200, #e3e2e7);
  color: var(--gray-200, #e3e2e7);
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    padding: 16px 24px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    color: var(--gray-900, #272343);
    /* background: var(--beige-200, #f2eae1); */
    /* Button/Large */
    font-family: Basier Square;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px; /* 150% */
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background: var(--beige-200, #f2eae1);
  }

  & svg {
    width: 24px;
    height: 24px;
    color: #272343;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const FooterNav = () => {
  return (
    <FooterLinks>
      <StyledNavLink to="support">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M11.97 22.5C17.493 22.5 21.97 18.023 21.97 12.5C21.97 6.977 17.493 2.5 11.97 2.5C6.447 2.5 1.97 6.977 1.97 12.5C1.97 18.023 6.447 22.5 11.97 22.5Z"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17C13.1935 17 14.3381 16.5259 15.182 15.682C16.0259 14.8381 16.5 13.6935 16.5 12.5C16.5 11.3065 16.0259 10.1619 15.182 9.31802C14.3381 8.47411 13.1935 8 12 8C10.8065 8 9.66193 8.47411 8.81802 9.31802C7.97411 10.1619 7.5 11.3065 7.5 12.5C7.5 13.6935 7.97411 14.8381 8.81802 15.682C9.66193 16.5259 10.8065 17 12 17Z"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.9 5.42999L8.44 8.95999"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.9 19.57L8.44 16.04"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.05 19.57L15.51 16.04"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.05 5.42999L15.51 8.95999"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Support</span>
      </StyledNavLink>
      <StyledNavLink to="logout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M17.44 15.12L20 12.56L17.44 10"
            stroke="#272343"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.76 12.56H19.93"
            stroke="#272343"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.76 20.5C7.34 20.5 3.76 17.5 3.76 12.5C3.76 7.5 7.34 4.5 11.76 4.5"
            stroke="#272343"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Logout</span>
      </StyledNavLink>
    </FooterLinks>
  );
};

export default FooterNav;
