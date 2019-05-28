import React from "react"
import ReactModal from "react-modal"
import PropTypes from "prop-types"
import styled from "styled-components"

import { theme } from "../style"

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

const Form = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
  }
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

const Input = styled.input`
  color: ${theme.colors.black};
  width: 100%;
  height: 80px;
  border: 1px solid ${theme.colors.darkGrey};
  border-radius: 4px;
  font-size: 4rem;
  padding: 1rem 2rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 2.5rem;
    height: 60px;
  }
`

const Button = styled.button`
  background-color: ${theme.colors.darkGrey};
  border-radius: 4px;
  border: none;
  color: ${theme.colors.white};
  font-size: 2.6rem;
  font-weight: bold;
  height: 80px;
  margin-left: 25px;
  padding: 0 5rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.darkGrey};
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 1.6rem;
    height: 60px;
  }

  @media (max-width: 585px) {
    margin-top: 1rem;
    width: 100%;
    margin-left: 0;
  }
`

const Close = styled.button`
  color: white;
  font-size: 12rem;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

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
      <Form>
        <Input type="email" placeholder="address@email.com" />
        <Button>Join</Button>
      </Form>
    </ModalBody>
  </StyledReactModal>
)

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
}

export default Modal
