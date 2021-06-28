import React from 'react';
import styled, { css } from 'styled-components';
import { getGridLayout, getGridGap } from '../../../../helpers';
import base from '../../../../styles/base';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: ${getGridLayout('small')};

  @media ${base.media.medium} {
    grid-template-columns: ${getGridLayout('medium')};
  }
  @media ${base.media.large} {
    grid-template-columns: ${getGridLayout('large')};
  }
  @media ${base.media.xlarge} {
    grid-template-columns: ${getGridLayout('xlarge')};
  }
  @media ${base.media.xxlarge} {
    grid-template-columns: ${getGridLayout('xxlarge')};
  }
  @media ${base.media.max} {
    grid-template-columns: ${getGridLayout('max')};
  }

  ${(props) =>
    props.container &&
    css`
      max-width: ${base.MAXWIDTH};
      width: 100vw;
      margin: auto;
      grid-row-gap: ${getGridGap('small')};
      margin-top: ${(props) => (props.hasAnnouncement ? '2.5em' : '0')};

      @media ${base.media.medium} {
        grid-row-gap: ${getGridGap('medium')};
      }
      @media ${base.media.large} {
        grid-row-gap: ${getGridGap('large')};
      }
      @media ${base.media.xlarge} {
        grid-row-gap: ${getGridGap('xlarge')};
      }
      @media ${base.media.xxlarge} {
        grid-row-gap: ${getGridGap('xxlarge')};
      }
      @media ${base.media.max} {
        grid-row-gap: ${getGridGap('max')};
      }
    `}

  ${(props) =>
    props.row &&
    css`
      grid-column-start: 1;
      grid-column-end: 10;
    `}
`;

const Grid = ({ children, hasAnnouncement, row, container }) => {
  return (
    <StyledWrapper row={row} container={container} hasAnnouncement={hasAnnouncement}>
      {children}
    </StyledWrapper>
  );
};

export default Grid;
