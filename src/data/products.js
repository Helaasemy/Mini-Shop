import { useStaticQuery, graphql } from "gatsby"

export const useProducts = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark (filter: {frontmatter: {name: {ne: null}}}){
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
`)
    return data.allMarkdownRemark.nodes
  }
