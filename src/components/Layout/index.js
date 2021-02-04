/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

import { CartProvider } from '../../context/CartContext';

import Header from "../Header"

export default function Layout({ children }) {
  return (
    <CartProvider>
      <Header />
      <main sx={{ paddingTop: 50 }}>
        {children}
      </main>
      <footer />
    </CartProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
