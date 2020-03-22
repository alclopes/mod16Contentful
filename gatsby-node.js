// será usado para encontrar o path do template
const path = require('path')

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const posts = await graphql(`
        query {
            posts: allContentfulPost(filter: { visible: { eq: true } }) {
            edges {
                node {
                title
                slug
                content {
                    internal {
                    content
                    type
                    }
                }
                }
            }
            }
        }
    `)
    const postTemplate = path.resolve('src/templates/post.js')
    // console.log("#########", posts.data.posts)
    posts.data.posts.edges.forEach(post => {
        createPage({
            path: post.node.slug,
            component: postTemplate,
            context: {
                slug: post.node.slug
            }
        })
    })
}