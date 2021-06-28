import React, { useEffect, useState } from "react"
import styled from "styled-components"
// import FrikirkeNetLogo from "../../../assets/frikirkenet_logo.svg"
// import MosaikLogo from "../../../assets/mosaik_logo.svg"
import { Body, Link } from "../typography"
import Socials from "../elements/Socials"
import Icon from "../../icon"
import Button from "../inputs/Button"
import { media, colors, shades } from "../../constants"
import { useViewport } from "../../hooks"

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  border-top: 0.1em solid ${shades.gray60};
  width: 100%;
  padding: 3em;
  display: grid;
  grid-gap: 4em;
  @media ${media.medium} {
    grid-template-columns: 1fr 30em;
  }
`

const StyledColumn = styled.div`
  display: flex;
  opacity: 0.7;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  gap: 2em;
`
const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`
const StyledLogo = styled.div`
  width: 5em;
  align-self: start;
`
const StyledAreaHeader = styled(Body)`
  font-weight: bold;
  margin-bottom: 1em;
  line-height: 1em;
`

const Footer = data => {
  const links = {
    linksLeft: data.linksLeft,
    linksMiddle: data.linksMiddle,
    linksRight: data.linksRight,
  }

  const [pathname, setPathname] = useState(null)

  useEffect(() => {
    setPathname(window.location.pathname)
  })

  return (
    <StyledWrapper>
      <StyledColumn direction="column">
        <StyledLogo>
          <Icon icon="alive_font_logo" />
        </StyledLogo>
        <Socials content={data.socials} size="big" theme="gray" />
      </StyledColumn>
      <StyledColumn direction="row" justify="space-between">
        {Object.keys(links).map(area => (
          <StyledLinkList>
            <StyledAreaHeader>
              {data["header" + area.replace("links", "")]}
            </StyledAreaHeader>
            {links[area].map(link => (
              <Link href={link.url.path}>{link.label}</Link>
            ))}
          </StyledLinkList>
        ))}
      </StyledColumn>
    </StyledWrapper>
  )
}

export default Footer
