import { useStaticQuery, graphql } from "gatsby"

export const useHeader = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark (filter: {frontmatter: {name: {eq: null}}}){
        nodes {
          frontmatter {
          title
          lead
          }
        }
      }
  }
`)
    return data.allMarkdownRemark.nodes
  }
