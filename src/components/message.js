import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { theme } from "../style"

const StyledLink = styled(props => <Link {...props} />)`
  color: ${theme.colors.red};
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

const Message = () => (
  <Title>
    THE END OF
    <br />
    STUDENT DEBT
    <br />
    IS <StyledLink>HERE</StyledLink>!
  </Title>
)
export default Message
