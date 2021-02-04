/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"



import Layout from "../components/Layout"
import { Container } from "../components/Grid"
import { jsx, Styled } from "theme-ui"

import dumy from "../images/products/dumy.svg"

const Product = ({ data }) => {
  const name = data.allMarkdownRemark.nodes[0].frontmatter.name
  const description = data.allMarkdownRemark.nodes[0].frontmatter.description
  const price = data.allMarkdownRemark.nodes[0].frontmatter.price

  return (

    <Layout>
      <Container sx={{marginTop: "80px"}}>
        <div sx={styles.row}>
          <div sx={{marginRight: "140px"}}>
            <img src={dumy} alt="Vector Monitor" sx={styles.img} />
          </div>
          <div sx={{marginTop: "50px"}}>
            <Styled.h2>{name} </Styled.h2>
            <Styled.p sx={{maxWidth: "410px"}}>{description} </Styled.p>
            <Styled.h4 sx={{maxWidth: "410px"}}>${price} </Styled.h4>
            <button 
            sx={{ variant: "button.primary", 
            mx: ["auto", null, 0] }}
            
            >
             ADD TO CART
          </button>
          </div>
        </div>
      </Container>
    </Layout>

  )
}
export default Product
const styles = {
  row: {
    margin: "auto",
    display: "flex",
    justifyContent: "center"
  },
  img: {
    height: "364px",
    width: "auto"
  }
}
export const pageQuery = graphql`
query ProductQuery($slug: String!){
  allMarkdownRemark(filter: {frontmatter: {slug: {eq: $slug }}}) {
    nodes {
      frontmatter {
        description
        excerpt
        image
        name
        price
        slug
        tag
      }
      id
    }
  }
}
`