module.exports = {
  siteMetadata: {
    title: 'Gatsby',
    siteUrl: 'https://www.gatsbyjs.org',
    description: 'Blazing-fast static site generator for React',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'icodejs',
        accessToken: 'MC5XMkNyX3lrQUFDZ0FkTEJY.ZCA977-977-977-977-977-977-9GDDvv73vv73vv71-77-9TFTvv71j77-9Vgzvv73vv71W77-977-9Ge-_ve-_vUM',
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },
   
        htmlSerializer: ({ node, key, value }) => (
          (type, element, content, children) => {
            // Your HTML serializer
          }
        )
      }
    }
  ]
};