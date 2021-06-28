import React from "react"
import theme from "./src/styles/defaultTheme"
import base from "./src/styles/base"
import { ThemeProvider } from "styled-components";
import Baseline from "./src/styles/Baseline";
import PageWrapper from "./src/templates/global/PageWrapper"


export const wrapRootElement = ({element}) => { 
  return (<ThemeProvider theme={{theme, base}}>
    <Baseline />
    {element}
  </ThemeProvider>)
}

export const wrapPageElement = ({props, element}) => {
  const meta = {...props.pageContext.meta, url:props.location.pathname}
  return <PageWrapper meta={meta}>{element}</PageWrapper>
  
}