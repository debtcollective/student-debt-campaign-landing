/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { theme } from "../../style"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    height: 100%;
    margin: 0;
    width: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    align-items: center;
    background-color: ${theme.colors.beige};
    display: flex;
    font-size: 1.4rem;
    justify-content: center;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
