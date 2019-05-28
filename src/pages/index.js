import React, { Component } from "react"

import Layout from "../components/layout"
import Message from "../components/message"
import Modal from "../components/modal"
import SEO from "../components/seo"

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
