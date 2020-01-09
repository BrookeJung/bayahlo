import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nanum+Myeongjo&display=swap');
${reset};
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    font-family:'Nanum Myeongjo',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing:border-box;
    min-height:100%;
}   
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing:inherit;
}
button{
    color:inherit
}
`

export default GlobalStyle
