import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { theme } from "../style"

const StyledLink = styled.a`
  color: ${theme.colors.red};
  cursor: pointer;
  text-decoration: underline;
`

const Title = styled.h1`
  color: ${theme.colors.black};
  font-family: "More Gothic Bold";
  font-size: 5rem;
  text-align: center;

  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 6rem;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 8rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 10rem;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    font-size: 13rem;
  }

  @media (min-width: ${theme.breakpoints.xxl}) {
    font-size: 16rem;
  }
`

const Message = ({ onLinkClick }) => (
  <Title>
    THE END OF
    <br />
    STUDENT DEBT
    <br />
    IS <StyledLink onClick={onLinkClick}>HERE</StyledLink>!
  </Title>
)

Message.propTypes = {
  onLinkClick: PropTypes.func,
}

export default Message
