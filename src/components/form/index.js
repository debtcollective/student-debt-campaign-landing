import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

import { theme } from "../../style"

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FormGroup = styled.div`
  align-items: flex-end;
  display: flex;
  width: 100%;

  @media (max-width: 585px) {
    flex-direction: column;
  }
`

const Label = styled.label`
  color: ${theme.colors.white};
  font-family: "Libre Franklin", sans-serif;
  font-size: 2.4rem;
  width: 100%;
`
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${theme.colors.darkGrey};
  color: ${theme.colors.black};
  font-family: "Libre Franklin", sans-serif;
  font-size: 4rem;
  height: 80px;
  padding: 1rem 2rem;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 2.5rem;
    height: 60px;
  }
`

const Button = styled.button`
  background-color: ${theme.colors.darkGrey};
  border-radius: 4px;
  border: 0;
  color: ${theme.colors.white};
  cursor: pointer;
  font-family: "Libre Franklin", sans-serif;
  font-size: 2.6rem;
  font-weight: bold;
  height: 80px;
  margin-left: 25px;
  padding: 0 5rem;
  text-transform: uppercase;

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

const ResultMessage = styled.div`
  color: ${theme.colors.white};
  margin-top: 1rem;
  font-size: 2rem;
  width: 100%;

  a {
    color: ${theme.colors.white};
  }
`

class Form extends Component {
  state = {
    email: "",
    msg: "",
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email } = this.state

    if (!email) {
      return false
    }

    const response = await addToMailchimp(email)
    const { msg } = response

    this.setState({
      msg,
    })
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit} action="" method="post">
        <FormGroup>
          <Label>
            Email address
            <Input
              type="email"
              placeholder="address@email.com"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Label>
          <Button type="submit">Join</Button>
        </FormGroup>
        <ResultMessage dangerouslySetInnerHTML={{ __html: this.state.msg }} />
      </StyledForm>
    )
  }
}

export default Form
