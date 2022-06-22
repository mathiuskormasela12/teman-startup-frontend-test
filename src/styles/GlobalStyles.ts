// ========== Global Styles
// import all modules
import { createGlobalStyle } from 'styled-components';
import { Fonts } from '../themes';
import Inter from '../fonts/Inter-Regular.ttf';
import InterBold from '../fonts/Inter-Bold.ttf';
import InterLight from '../fonts/Inter-Light.ttf';
import Oswald from '../fonts/Oswald-Regular.ttf';
import OswaldBold from '../fonts/Oswald-Bold.ttf';
import OswaldLight from '../fonts/Oswald-Light.ttf';
import Caveat from '../fonts/Caveat-Regular.ttf';
import CaveatBold from '../fonts/Caveat-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
	@font-face {
		src: url(${Inter}) format('truetype');
		font-family: inter; 
	}
	
	@font-face {
		src: url(${InterBold}) format('truetype');
		font-family: inter-bold; 
	}

	@font-face {
		src: url(${InterLight}) format('truetype');
		font-family: inter-light; 
	}

	@font-face {
		src: url(${Oswald}) format('truetype');
		font-family: oswald; 
	}
	
	@font-face {
		src: url(${OswaldBold}) format('truetype');
		font-family: oswald-bold; 
	}

	@font-face {
		src: url(${OswaldLight}) format('truetype');
		font-family: oswald-light; 
	}

	@font-face {
		src: url(${Caveat}) format('truetype');
		font-family: caveat; 
	}
	
	@font-face {
		src: url(${CaveatBold}) format('truetype');
		font-family: caveat-bold; 
	}

	html {
		background-color: white;
		font-size: 16px;
		font-family: ${Fonts.base};
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	h1 {
		font-size: 2.8rem;
	}

	h2 {
		font-size: 2.6rem;
	}

	h3 {
		font-size: 2.4rem;
	}

	h4 {
		font-size: 2.2rem;
	}
	h5 {
		font-size: 2rem;
	}

	h6 {
		font-size: 1.8rem;
	}
	
	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance:none;
	}
`;
