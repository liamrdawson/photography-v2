import { createGlobalStyle } from 'styled-components'
import { primaryFont } from './typography'

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
        box-sizing: border-box;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0; 
        font-family: ${primaryFont};
    }
`

export default GlobalStyle
