import React from "react"
import ReactModal from "react-modal"
import PropTypes from "prop-types"
import styled from "styled-components"

import { theme } from "../style"

const ModalBody = styled.div`
  background-color: ${theme.colors.red};
`

const Modal = ({ isOpen, onRequestClose }) => (
  <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
    <div>
      <h2>Stay Updated</h2>
    </div>
  </ReactModal>
)

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
}

export default Modal
