import React, { Component } from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import Message from "../components/message"
import Modal from "../components/modal"
import SEO from "../components/seo"
import { theme } from "../style"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    align-items: center;
    background-color: ${theme.colorBeige};
    display: flex;
    justify-content: center;
  }
`

class IndexPage extends Component {
  state = {
    showModal: false,
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Layout>
          <SEO title="Student Debt Strike" />
          <Message onLinkClick={this.showModal} />
          <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.hideModal}
          />
        </Layout>
      </>
    )
  }
}

export default IndexPage
