// Import plugin
import React from "react"

// import settings style
import settings from "../../../layouts/settings"

// TypeScript for Props
type Props = {
  size?: string
  children: JSX.Element | JSX.Element[] | []
}

// create new component
const ContainerComponent = ({ size, children }: Props) => {
  return <p>ok</p>
}

// export new component
export default ContainerComponent
