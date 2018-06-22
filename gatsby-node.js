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
    });
  }
};

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against this Gatsbygram's graphql schema. Think of
    // it like Gatsbygram has a built-in database constructed
    // from static data that you can run queries against.
    //
    // Post is a data node type derived from data/posts.json
    // which is created when scrapping Instagram. “allPostsJson”
    // is a "connection" (a GraphQL convention for accessing
    // a list of nodes) gives us an easy way to query all
    // Post nodes.
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
        // We want to create a detailed page for each
        // Instagram post. Since the scrapped Instagram data
        // already includes an ID field, we just use that for
        // each page's path.
        _.each(result.data.allJobsJson.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
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