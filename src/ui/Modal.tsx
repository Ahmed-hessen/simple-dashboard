import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const ClosedButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 5rem;
  right: 6rem;

  & svg {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    stroke: var(--gray-500, #9391a4);
  }
`;
interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  // create portal => to make the component reuasble and didnt affect by the over-flow hidden(CSS) of the parent
  // and be child of body directly
  return createPortal(
    <Overlay>
      <StyledModal>
        <ClosedButton onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M19 5.5L5 19.5"
              stroke="#9391A4"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M19 19.5L5 5.5"
              stroke="#9391A4"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </ClosedButton>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
