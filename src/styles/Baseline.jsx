import React from 'react';
import { createGlobalStyle } from 'styled-components';
import base from './base';
import Helmet from 'react-helmet';
import { getFontSize } from '../helpers';

const GlobalStyles = createGlobalStyle`
  html, body{
    font-size:${getFontSize('small')};
    @media ${base.media.medium}{
    font-size:${getFontSize('medium')};
    }
    @media ${base.media.large}{
    font-size:${getFontSize('large')};
    }
    @media ${base.media.xlarge}{
    font-size:${getFontSize('xlarge')};
    }
    @media ${base.media.xxlarge}{
    font-size:${getFontSize('xxlarge')};
    }
    @media ${base.media.max}{
    font-size:${getFontSize('max')};
    }
  }

  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
    -webkit-font-smoothing: antialiased;
  }
`;

const Baseline = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Helmet>
      <GlobalStyles />
    </>
  );
};

export default Baseline;
