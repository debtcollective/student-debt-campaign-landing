import React from "react"
import ReactModal from "react-modal"
import PropTypes from "prop-types"
import styled from "styled-components"

import { theme } from "../../style"
import Form from "../form"

ReactModal.setAppElement("#___gatsby")

const StyledReactModal = styled(props => <ReactModal {...props} />)`
  align-items: center;
  background-color: ${theme.colors.red};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`
StyledReactModal.displayName = "StyledReactModal"

const ModalBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 1180px;
  padding: 2rem;
`

const Title = styled.h2`
  color: ${theme.colors.white};
  font-family: "More Gothic Bold";
  font-size: 25rem;
  margin: 0;
  text-align: center;

  @media (max-width: ${theme.breakpoints.xl}) {
    font-size: 16rem;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 12rem;
  }

  @media (max-width: 585px) {
    font-size: 10rem;
  }

  @media (max-width: 485px) {
    font-size: 7rem;
  }
`

const Close = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 12rem;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 1.8rem;
  top: 0;

  @media (max-width: ${theme.breakpoints.xl}) {
    font-size: 10rem;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 8rem;
  }

  @media (max-width: 585px) {
    font-size: 6rem;
  }
`

const Modal = ({ isOpen, onRequestClose }) => (
  <StyledReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
    <Close onClick={onRequestClose}>
      <span aria-hidden="true">&times;</span>
    </Close>
    <ModalBody>
      <Title>Stay Updated</Title>
      <Form />
    </ModalBody>
  </StyledReactModal>
)

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
}

export default Modal
