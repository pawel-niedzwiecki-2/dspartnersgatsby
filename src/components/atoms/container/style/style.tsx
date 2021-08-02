// Import plugin
import styled from "styled-components"

// TypeScript for Props
interface Props {
  theme: {
    max_width: string
    break: [{ main: string }]
  }
  size?: string
}

// Create new style
const Container = styled.div<Props>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.break[0].main};
  padding-right: ${props => props.theme.break[0].main};
  max-width: ${props =>
    props.size === "full" ? "100%" : props.theme.max_width};
`

// Export new style
export default Container
