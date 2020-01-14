import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset};

body {
    font-family:'Nanum Myeongjo',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}   
a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing:border-box;
}

`

export default GlobalStyle
