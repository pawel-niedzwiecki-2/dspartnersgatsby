import styled from "styled-components"

interface Props {
  theme: {
    light: string
    primary: string
    break: { main: string }[]
  }
}

export const Header = styled.header<Props>`
  width: 100%;
  height: auto;
  display: block;
  background-color: ${props => props.theme.primary};

  ul {
    display: flex;
    li {
      &:first-of-type {
        padding-left: 0;
      }

      a {
        font-weight: bold;
      }
      a.active {
        color: ${props => props.theme.light};
      }
    }
  }
`
