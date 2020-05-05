import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
	box-sizing: border-box;  
	-webkit-font-smoothing: antialiased;
}

body{
	font-family: Roboto, sans-serif;
	-webkit-font-smoothing: antialiased;
	background-color: ${props => props.theme.colors.background};
}
`;