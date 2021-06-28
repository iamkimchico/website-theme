import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css, createGlobalStyle } from "styled-components"
import {
  media,
  colors,
  MAXWIDTH,
  getGridGap,
  zLevels,
  getColPadding,
  fontFamily,
} from "../../constants"
import Heading from "../typography/Heading"
import { toggleNavMenu } from "../../state/reducers/global"
import { Link } from "gatsby"
import Icon from "../../icon"
import { useViewport } from "../../hooks"
import Button from "../inputs/Button"

const GlobalStyle = createGlobalStyle`
  body {
    overflow:${props => (props.navMenuToggled ? "hidden" : "visible")};
  }
`

const StyledHeaderWrapper = styled.div`
  height: ${props => `calc(${getGridGap(props.viewport.size)} * 3)`};
  top: ${props => `calc(${getGridGap(props.viewport.size)} / 2)`};
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  display: grid;
  align-items: center;
  position: relative;
  z-index: ${zLevels[9]};

  @media ${media.medium} {
    height: ${props => `calc(${getGridGap(props.viewport.size)} * 1.5)`};
  }
`

const StyledLogo = styled.div`
  height: 100%;
  svg {
    fill: ${props => (props.navMenuToggled ? colors.white : colors.black)};
  }
  @media ${media.medium} {
    width: 8em;
  }
`

const StyledTopWrapper = styled.div`
  position: absolute;
  z-index: ${zLevels[10]};
  width: 100%;
  will-change: opacity;
  a {
    text-decoration: none;
  }

  ${props => {
    if (props.scrolled) {
      return css`
        left: 0;
        top: 0;
        width: 100vw;
        position: fixed;
        background-color: ${props =>
          props.navMenuToggled ? "none" : colors.white};
        padding-right: ${props =>
          getColPadding("outer-xxx", props.viewport.size)};
        padding-left: ${props =>
          getColPadding("outer-xxx", props.viewport.size)};
        padding-bottom: 1.2em;
        padding-top: 1.2em;
        box-shadow: ${props =>
          props.navMenuToggled
            ? "none"
            : "0px 0px 10px 0px rgba(0, 0, 0, 0.1)"};
      `
    }
  }}
`

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  height: 100%;
  margin: auto;
  @media ${media.max} {
    max-width: ${MAXWIDTH};
  }
`

const StyledRight = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3em;
  align-items: center;
  > div {
    margin-top: -0.2em;
  }
  a {
    background-color: transparent;
    /* border: ${props =>
      props.navMenuToggled ? "solid 1px black" : "none"}; */
  }
`
const StyledLeft = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3em;
  align-items: center;
`

const StyledMenu = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-items: center;
  gap: 0.5em;
  cursor: pointer;
  &:hover {
    div:before {
      width: 100%;
    }
  }
`

const StyledBurgerMenu = styled.div`
  width: 1.5em;
  height: 0.7em;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 0.2em;
    background: ${props =>
      props.navMenuToggled ? colors.white : colors.black};
    position: absolute;
  }
  &:before {
    content: "";
    transition: all 0.2s ease-in-out;
    width: 70%;
    top: 0.4em;
    height: 0.2em;
    background: ${props =>
      props.navMenuToggled ? colors.white : colors.black};
    position: absolute;
  }
`

const Header = ({ isScrolled, cta }) => {
  const dispatch = useDispatch()
  const navMenuToggled = useSelector(state => state.global.navMenuToggled)
  const viewport = useViewport()

  const [pathname, setPathname] = useState(null)

  useEffect(() => {
    setPathname(window.location.pathname)
  })

  return (
    <>
      <GlobalStyle navMenuToggled={navMenuToggled} />
      <StyledHeaderWrapper viewport={viewport}>
        <StyledTopWrapper
          viewport={viewport}
          scrolled={isScrolled}
          navMenuToggled={navMenuToggled}
        >
          <StyledContent>
            <StyledLeft>
              <StyledLogo
                onClick={() => dispatch(toggleNavMenu(false))}
                navMenuToggled={navMenuToggled}
              >
                <Link to="/">
                  <Icon
                    icon="alive_font_logo"
                    theme="black"
                    size="medium-font"
                  />
                </Link>
              </StyledLogo>
            </StyledLeft>
            <StyledRight navMenuToggled={navMenuToggled} theme={cta.theme}>
              {pathname !== cta?.link?.path && cta?.label && cta.label !== "" && (
                <Button
                  type="a"
                  url={cta.link?.path}
                  theme={cta.theme}
                  size={isScrolled ? "small" : "default"}
                  cta
                >
                  {cta.label}
                </Button>
              )}
              <StyledMenu
                onClick={() => dispatch(toggleNavMenu(!navMenuToggled))}
                navMenuToggled={navMenuToggled}
              >
                <Heading size="h6" theme={navMenuToggled ? "white" : "black"}>
                  Menu
                </Heading>
                <StyledBurgerMenu navMenuToggled={navMenuToggled} />
              </StyledMenu>
            </StyledRight>
          </StyledContent>
        </StyledTopWrapper>
      </StyledHeaderWrapper>
    </>
  )
}

export default Header
