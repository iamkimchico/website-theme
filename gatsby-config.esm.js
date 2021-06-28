import { getSchemas } from "./src/helpers/prismic";

export default (props) => ({
  plugins:[
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve:"gatsby-source-filesystem",
      options:{
        name:"pageTypes",
        path:`${__dirname}/src/templates/pages`
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options:{
        repositoryName:props.prismicRepo,
        accessToken:props.prismicToken,
        linkResolver: ({ node, key, value }) => (doc) => {
          // do something with links here
        },
        schemas: {...getSchemas()}
      }
    }
  ]
})