import styled from "@emotion/styled";

import AddAcount from "./AddAcount";

const StyledEmptyAccount = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  align-self: stretch;
`;

const StyledEmptyAccountIcon = styled.svg`
  width: 64px;
  height: 64px;
`;
const StyledEmptyAccountText1 = styled.p`
  color: var(--gray-900, #272343);

  /* Body/Large/Strong */
  font-family: Basier Square;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 10px; /* 150% */
`;
const StyledEmptyAccountText2 = styled.p`
  color: var(--gray-600, #7a778f);
  text-align: center;
  /* Body/Default/Regular */
  font-family: Basier Square;
  font-size: 16px;
  font-style: normal;
  width: 300px;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const EmptyAccount = () => {
  return (
    <StyledEmptyAccount>
      <StyledEmptyAccountIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
        >
          <path
            d="M18.3666 48H11.5666C7.75331 48 5.83331 46.08 5.83331 42.2667V11.0667C5.83331 7.25333 7.75331 5.33333 11.5666 5.33333H23.0333C26.8466 5.33333 28.7666 7.25333 28.7666 11.0667V16"
            stroke="#C8C6D0"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 4"
          />
          <path
            d="M36.2333 16V11.0667C36.2333 7.25333 38.1533 5.33333 41.9667 5.33333H53.4333C57.2467 5.33333 59.1667 7.25333 59.1667 11.0667V42.2667C59.1667 46.08 57.2467 48 53.4333 48H46.82"
            stroke="#C8C6D0"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 4"
          />
          <path
            d="M27.1666 29.3333H37.8333"
            stroke="#9391A4"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.1666 37.3333H37.8333"
            stroke="#9391A4"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.5 58.6667V50.6667"
            stroke="#9391A4"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46.82 22.4533V52.2133C46.82 56.5067 44.6866 58.6667 40.3933 58.6667H24.82C20.5266 58.6667 18.3666 56.5067 18.3666 52.2133V22.4533C18.3666 18.16 20.5266 16 24.82 16H40.3933C44.6866 16 46.82 18.16 46.82 22.4533Z"
            stroke="#9391A4"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledEmptyAccountIcon>
      <StyledEmptyAccountText1>no accounts</StyledEmptyAccountText1>
      <StyledEmptyAccountText2>
        Add a new account to start monitoring them for KYC compliance purposes
      </StyledEmptyAccountText2>
      <AddAcount />
    </StyledEmptyAccount>
  );
};

export default EmptyAccount;
