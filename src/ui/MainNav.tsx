import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  height: 440px;
  /* background: var(--beige-200, #f2eae1); */
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    color: var(--gray-900, #272343);

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

function MainNav() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M9.02 3.34L3.63 7.54C2.73 8.24 2 9.73 2 10.86V18.27C2 20.59 3.89 22.49 6.21 22.49H17.79C20.11 22.49 22 20.59 22 18.28V11C22 9.79 21.19 8.24 20.2 7.55L14.02 3.22C12.62 2.24 10.37 2.29 9.02 3.34Z"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18.49V15.49"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Home</span>
        </StyledNavLink>
        <StyledNavLink to="accounts">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M19.9 14H4.1C2.6 14 2 14.64 2 16.23V20.27C2 21.86 2.6 22.5 4.1 22.5H19.9C21.4 22.5 22 21.86 22 20.27V16.23C22 14.64 21.4 14 19.9 14Z"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9 2.5H4.1C2.6 2.5 2 3.14 2 4.73V8.77C2 10.36 2.6 11 4.1 11H19.9C21.4 11 22 10.36 22 8.77V4.73C22 3.14 21.4 2.5 19.9 2.5Z"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Accounts</span>
        </StyledNavLink>
        <StyledNavLink to="workspaces">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M21.08 9.08V15.92C21.08 17.04 20.48 18.08 19.51 18.65L13.57 22.08C12.6 22.64 11.4 22.64 10.42 22.08L4.48 18.65C4.00177 18.3727 3.60493 17.9745 3.32935 17.4953C3.05376 17.0161 2.90914 16.4728 2.91 15.92V9.08C2.91 7.96 3.51 6.92 4.48 6.35L10.42 2.92C11.39 2.36 12.59 2.36 13.57 2.92L19.51 6.35C20.48 6.92 21.08 7.95 21.08 9.08Z"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11.5C12.618 11.5 13.2106 11.2545 13.6476 10.8176C14.0845 10.3806 14.33 9.78795 14.33 9.17C14.33 8.55204 14.0845 7.9594 13.6476 7.52244C13.2106 7.08548 12.618 6.84 12 6.84C11.382 6.84 10.7894 7.08548 10.3524 7.52244C9.91548 7.9594 9.67 8.55204 9.67 9.17C9.67 9.78795 9.91548 10.3806 10.3524 10.8176C10.7894 11.2545 11.382 11.5 12 11.5Z"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 17.16C16 15.36 14.21 13.9 12 13.9C9.79 13.9 8 15.36 8 17.16"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Workspaces</span>
        </StyledNavLink>
        <StyledNavLink to="account">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M21.08 9.08V15.92C21.08 17.04 20.48 18.08 19.51 18.65L13.57 22.08C12.6 22.64 11.4 22.64 10.42 22.08L4.48 18.65C4.00177 18.3727 3.60493 17.9745 3.32935 17.4953C3.05376 17.0161 2.90914 16.4728 2.91 15.92V9.08C2.91 7.96 3.51 6.92 4.48 6.35L10.42 2.92C11.39 2.36 12.59 2.36 13.57 2.92L19.51 6.35C20.48 6.92 21.08 7.95 21.08 9.08Z"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11.5C12.618 11.5 13.2106 11.2545 13.6476 10.8176C14.0845 10.3806 14.33 9.78795 14.33 9.17C14.33 8.55204 14.0845 7.9594 13.6476 7.52244C13.2106 7.08548 12.618 6.84 12 6.84C11.382 6.84 10.7894 7.08548 10.3524 7.52244C9.91548 7.9594 9.67 8.55204 9.67 9.17C9.67 9.78795 9.91548 10.3806 10.3524 10.8176C10.7894 11.2545 11.382 11.5 12 11.5Z"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 17.16C16 15.36 14.21 13.9 12 13.9C9.79 13.9 8 15.36 8 17.16"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Account</span>
        </StyledNavLink>
      </NavList>
    </nav>
  );
}
export default MainNav;
