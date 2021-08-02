// Import plugin
import React from "react"
import { Link } from "gatsby"

// Import settings
import settings from "../../../layouts/index"

// Import component

// Import styles
import { Header } from "./style/style"

// Create new component
const HeaderComponent = () => {
  return (
    <>
      <Header theme={settings}>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" activeClassName="active">
              Search
            </Link>
          </li>
        </ul>
      </Header>
    </>
  )
}

// Export new component
export default HeaderComponent
