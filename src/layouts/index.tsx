// import plugin
import React from "react"
import { Helmet } from "react-helmet"

// import style
import GlobalStyle from "../layouts/style/GlobalStyle"

// import settings style
import settings from "./settings"

// import component
import Header from "../components/organisms/header/header"
import Footer from "../components/organisms/footer/footer"

// TypeScript for Props
type Props = {
  title?: string
  children: JSX.Element
}

// create new component
const Layouts = ({ title, children }: Props) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "pl" }}>
        <title>{title ? title : "DSPartners"}</title>
      </Helmet>
      <GlobalStyle theme={settings} />
      <Header />
      {children}
      <Footer />
    </>
  )
}

// export new component
export default Layouts
