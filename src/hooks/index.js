import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const useViewport = () => {
  const breakpoint = useBreakpoint();

  if (breakpoint.max) {
    return { size: 'max', index: 5 };
  } else if (breakpoint.xxlarge) {
    return { size: 'xxlarge', index: 4 };
  } else if (breakpoint.xlarge) {
    return { size: 'xlarge', index: 3 };
  } else if (breakpoint.large) {
    return { size: 'large', index: 2 };
  } else if (breakpoint.medium) {
    return { size: 'medium', index: 1 };
  } else {
    return { size: 'small', index: 0 };
  }
};

export const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = (e) => {
    setWindowWidth(e.currentTarget.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return windowWidth;
};

export const useScroll = () => {
  const [scrollPos, setScrollPos] = useState({ top: 0, bottom: 0 });
  const handleScroll = (e) => {
    setScrollPos({
      top: e.target.documentElement.scrollTop,
      bottom: e.target.documentElement.scrollTop + window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return scrollPos;
};

export const useInViewport = (ref) => {
  const scrollPos = useScroll();

  if (ref && ref.current) {
    if (scrollPos.bottom > ref.current.offsetTop && scrollPos.top < ref.current.offsetTop + ref.current.offsetHeight) {
      return { isShowing: true, height: scrollPos.bottom - ref.current.offsetTop };
    } else {
      return { isShowing: false, height: 0 };
    }
  }
  return { isShowing: false, height: 0 };
};

// export const useGridEdge = () => {
//   const viewport = useViewport().size;
//   const windowWidth = useResize();
//   const maxWidth = parseInt(MAXWIDTH.replace('px', ''), 10);

//   if (windowWidth > maxWidth) {
//     //because the hero is at outer-xxx and not edge on this viewport
//     if (viewport === 'xxlarge') {
//       return `${(windowWidth - maxWidth) / 2 + colRelation[viewport] * baseFontSize[viewport]}px`;
//     }

//     return `${(windowWidth - maxWidth) / 2}px`;
//   }

//   return `${colRelation[viewport] * baseFontSize[viewport]}px`;
// };

export const useFiles = () => {
  const { allFile } = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            relativeDirectory
            name
          }
        }
      }
    }
  `);

  return allFile;
};
