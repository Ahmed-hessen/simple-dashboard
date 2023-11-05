import { useState } from "react";

import styled from "@emotion/styled";
import Modal from "../ui/Modal";
import CreateAccountForm from "../ui/CreateAccountForm";

const StyledEmptyAccountButton = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: var(--yellow-500, #ffd803);
`;
const StyledEmptyAccountButtonText = styled.span`
  color: var(--gray-900, #272343);

  /* Button/Large */
  font-family: Basier Square;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 150% */
`;
const StyledEmptyAccountButtonIcon = styled.svg`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px;
  justify-content: center;
  align-items: center;
`;
const AddAcount = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <StyledEmptyAccountButton onClick={() => setIsOpenModal((show) => !show)}>
        <StyledEmptyAccountButtonIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
          >
            <path
              d="M7 11.5001H15"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 15.5001V7.50006"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 21.5001H14C19 21.5001 21 19.5001 21 14.5001V8.50006C21 3.50006 19 1.50006 14 1.50006H8C3 1.50006 1 3.50006 1 8.50006V14.5001C1 19.5001 3 21.5001 8 21.5001Z"
              stroke="#272343"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledEmptyAccountButtonIcon>

        <StyledEmptyAccountButtonText>Add Account</StyledEmptyAccountButtonText>
      </StyledEmptyAccountButton>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateAccountForm />
        </Modal>
      )}
    </div>
  );
};

export default AddAcount;
