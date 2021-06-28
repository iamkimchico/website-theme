const MINHEIGHT = "40em"
const MAXWIDTH = "1710px"

const breakpoints = {
  MAX: 1900,
  XXLARGE: 1600,
  XLARGE: 1300,
  LARGE: 1000,
  MEDIUM: 750,
}

const media = {
  medium: `(min-width: ${breakpoints.MEDIUM}px)`,
  large: `(min-width: ${breakpoints.LARGE}px)`,
  xlarge: `(min-width: ${breakpoints.XLARGE}px)`,
  xxlarge: `(min-width: ${breakpoints.XXLARGE}px)`,
  max: `(min-width: ${breakpoints.MAX}px)`,
}

const zLevels = {
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600,
  7: 700,
  8: 800,
  9: 900,
  10: 1000,
}

const colRelation = {
  max: 5,
  xxlarge: 4.4,
  xlarge: 3.3,
  large: 3.3,
  medium: 2.8,
  small: 2,
}


const spacing = {
  small: "1em",
  medium: "3em",
  large: "5em",
  xlarge: "8em",
}

const fontSize = {
  small: 9,
  medium: 12,
  large: 14,
  xlarge: 16,
  xxlarge: 18,
  max: 20,
}

export default {breakpoints, media, zLevels, colRelation, MINHEIGHT, MAXWIDTH, spacing, fontSize}