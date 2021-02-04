import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import { Container } from "../components/Grid"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Hero />
      </Container>
    </Layout>
  )
}
