import path from "path"
import { createUrl, extractMeta } from "./src/helpers";
const pageFilesQuery = ` query MyQuery {
  allFile {
    edges {
      node {
        relativeDirectory
        name
      }
    }
  }
}`

const pageQuery = (type) => `query MyQuery {
  allPrismic${type} {
    edges {
      node {
        prismicId
        type
        uid
        lang
        id
        tags
        data {
          slug
          meta_type
          meta_twitter_creator
          meta_twitter_card
          meta_title
          meta_index_page
          meta_description
          meta_image {
            url
            fixed {
              src
              height
              width
            }
          }
        }
      }
    }
  }
 }`


export const createPages = async ({graphql, actions}) => {
  const { createPage } = actions;
  
  const pageFiles = await graphql(pageFilesQuery)

  for( const file of pageFiles.data.allFile.edges){
      if(file.node.name === "query"){
        
        const pageType = file.node.relativeDirectory
        const fetchPages = await graphql(pageQuery(pageType))
        const pages = fetchPages.data[`allPrismic${pageType}`].edges

        pages.forEach(page => {
          createPage({
            path:createUrl(page.node.data.slug, page.node.uid, page.node.lang),
            component: require.resolve(`./src/templates/pages/${pageType}/Template.jsx`),
            context:{ prismicId:page.node.prismicId, meta:extractMeta(page.node) }
          })
        })
      }
    
  }

}






