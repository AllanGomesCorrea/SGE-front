import styled, { createGlobalStyle } from 'styled-components'
import PuffLoader from 'react-spinners/PuffLoader'
import Colors from './colors'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		&:focus{
			outline-color: ${Colors.red};
		}

		::-webkit-scrollbar-track{
			background-color: ${Colors.lightGrey};
			border-radius: 10px;
		}

		::-webkit-scrollbar{
			width: 5px;
			background-color: ${Colors.lightGrey};
		}

		::-webkit-scrollbar-thumb{
			background-color: ${Colors.darkGrey};
			border-radius: 10px;
		}
	}

	html {
		font-size: 62.5%;
		font-family: 'IBM Plex Sans', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		-webkit-tap-highlight-color: transparent;
	}

	html, body {
		height: 100%;
	}

	a {
		text-decoration: none !important;
	}

	h1{
		font-family: 'IBM Plex Serif', serif;
		font-weight: 100;
		strong{
			font-family: 'IBM Plex Serif', serif;
			font-weight: 600;
			font-style: italic;
		}
	}

	h2 {
		font-family: 'IBM Plex Serif', serif;
		font-weight: 200;
		strong{
			font-family: 'IBM Plex Serif', serif;
			font-weight: 600;
			font-style: italic;
		}
	}

	h3 {
		font-family: 'IBM Plex Serif', serif;
		font-weight: 300;
		strong{
			font-family: 'IBM Plex Serif', serif;
			font-weight: 600;
			font-style: italic;
		}
	}

	.serif{
		font-family: 'IBM Plex Serif', serif;
		font-weight: 600;
	}
`

export const ContainerLoader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`

export const Loader = styled(PuffLoader).attrs({
	color: Colors.primary,
	size: 150,
})`
	display: block;
`

export default GlobalStyles
