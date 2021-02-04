const path = require('path');
const get = require('lodash/get');
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // products
    const result = await graphql(query);

    // Custom pages
    get(result, 'data.allMarkdownRemark.edges').forEach(({ node }) => {
        createPage({
            path: `${node.frontmatter.slug}`,
            component: path.resolve('./src/templates/product.js'),
            context: {
                slug: node.frontmatter.slug,
            },
        })
    });
}

const query = `
    {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
          }
        }
          `