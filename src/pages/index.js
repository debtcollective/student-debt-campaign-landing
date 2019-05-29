import React, { Component } from "react"

import Layout from "../components/Layout"
import Message from "../components/Message"
import Modal from "../components/Modal"
import SEO from "../components/SEO"

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
        <Layout>
          <SEO title="Home" />
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
