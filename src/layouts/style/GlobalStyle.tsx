import { createGlobalStyle } from "styled-components";

interface Props {
  theme: {
    light: string;
    primary: string;
    secondary: string;
    break: [{ main: string }];
    breakPoint: [{}];
    max_width: string;
  };
}

const GlobalStyle = createGlobalStyle<Props>`

*,
*::before,
*::after {
   box-sizing: border-box;
   -moz-osx-font-smoothing: grayscale;
   -webkit-font-smoothing: antialiased;
   
}



html{
   font-size: 62.5%;
}

body {
   margin: 0;
   padding: 0;
   font-size: 1.5rem;
   line-height: 1.3;
   font-style: normal;
   font-weight: normal;
   font-family: 'Montserrat', sans-serif;
   color: ${(props) => props.theme.primary};
   background-color: ${(props) => props.theme.secondary};
}

p,
h1,
h2,
h3,
h4,
h5,
h6{
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong{
    font-weight: bold;
}



p,
span{
   font-weight: normal;
}

a {
   opacity: 1;
   transition: all 0.3s;
   text-decoration: none;
   color: ${(props) => props.theme.secondary};
   &:hover{
      color: ${(props) => props.theme.light};
   }
}


ol,
ul{
   margin: 0; 
   padding: 0;
   list-style: none;
}

section{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

form{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
`;

export default GlobalStyle;
