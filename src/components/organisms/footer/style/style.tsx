import styled from "styled-components"

interface Props {
  theme: {
    light: string
    primary: string
    break: { main: string }[]
  }
}

export const Footer = styled.footer<Props>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  background-color: ${props => props.theme.primary};

  p {
    color: ${props => props.theme.light};
  }
`
