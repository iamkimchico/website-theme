import { graphql } from 'gatsby';
import React from 'react';
import { Grid } from '../../components/layout/Grid';
import { query } from './query';

export default function (data) {
  console.log(data);
  return (
    <Grid row>
      <div>Cool</div>
    </Grid>
  );
}

export const prismic = graphql`
  query pageQuery($prismicId: ID) {
    prismicLandingPage(prismicId: { eq: $prismicId }) {
      data {
        body {
          ... on PrismicLandingPageBodyHero {
            id
            slice_label
            slice_type
            primary {
              header
              tagline
              image {
                url
              }
            }
          }
        }
        page_description
        page_title {
          raw
        }
        show_page_description
        show_page_title
        slug
      }
      url
      uid
      type
      lang
      id
      tags
      alternate_languages {
        lang
        slug
        url
        uid
        type
      }
    }
  }
`;
