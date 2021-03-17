import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #f0f2f5;
		--red: #f0f2f5;
		--blue: #f0f2f5;
		--blue-light: #f0f2f5;
		--text-title: #f0f2f5;
		--text-body: #f0f2f5;
		--shape: #f0f2f5;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media screen and (max-width: 1080px) {
			font-size: 93.75%; // 15px
		}

		@media screen and (max-width: 720px) {
			font-size: 87.5%; // 14px
		}
	}

	body {
		background: var(--background);

		// Atributo css para fonte mais 'legível'
		webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`