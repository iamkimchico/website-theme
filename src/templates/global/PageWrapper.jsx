import React from 'react';
import Seo from './Seo';
import { Grid } from '../components/layout/Grid';

const PageWrapper = ({ children, meta }) => {
  return (
    <>
      <Seo {...meta} />
      <Grid container>{children}</Grid>
    </>
  );
};

export default PageWrapper;
