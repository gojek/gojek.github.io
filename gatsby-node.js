const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slug = require(`slug`)
const slash = require(`slash`)

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /bootstrap/,
      loader: "null-loader",
    })
  }
};

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allJobsJson(limit: 1000) {
              edges {
                node {
                  positionSlug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors))
        }

        // Create image post pages.
        const postTemplate = path.resolve(`src/templates/job.js`)
        _.each(result.data.allJobsJson.edges, edge => {
          createPage({
            path: `careers/${slug(edge.node.positionSlug)}/`,
            component: slash(postTemplate),
            context: {
              positionSlug: edge.node.positionSlug
            },
          })
        })

        return
      })
    )
  })
}