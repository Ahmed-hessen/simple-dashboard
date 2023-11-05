import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "./Modal";
import CreateAccountForm from "./CreateAccountForm";

const StyledHeader = styled.header`
  display: flex;
  width: 1140px;
  height: 40px;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid var(--gray-200, #e3e2e7);
`;
const StyledLeftHeader = styled.h4`
  color: var(--gray-900, #272343);

  /* Heading/H4 */
  font-family: Basier Square;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledRightHeader = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--gray-300, #c8c6d0);
  background-color: var(--yellow-500, #ffd803);
`;
const StyledRightHeaderIcon = styled.svg`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px;
  justify-content: center;
  align-items: center;
`;
const StyledRightHeaderName = styled.span`
  color: var(--gray-900, #272343);

  /* Button/Large */
  font-family: Basier Square;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 150% */
`;
function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <StyledHeader>
      <StyledLeftHeader>Monitored accounts</StyledLeftHeader>
      <StyledRightHeader>
        <StyledRightHeaderIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M7 11.0001H15"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 15.0001V7.00006"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 21.0001H14C19 21.0001 21 19.0001 21 14.0001V8.00006C21 3.00006 19 1.00006 14 1.00006H8C3 1.00006 1 3.00006 1 8.00006V14.0001C1 19.0001 3 21.0001 8 21.0001Z"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledRightHeaderIcon>
        <StyledRightHeaderName onClick={() => setIsOpenModal((open) => !open)}>
          Add Account
        </StyledRightHeaderName>
      </StyledRightHeader>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateAccountForm />
        </Modal>
      )}
    </StyledHeader>
  );
}

export default Header;
