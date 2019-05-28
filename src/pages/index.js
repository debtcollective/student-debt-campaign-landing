import React from "react"
import { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import Message from "../components/message"
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

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Message />
    </Layout>
  </>
)

export default IndexPage
