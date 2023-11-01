import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font/font.css';

const GlobalStyle = createGlobalStyle`
	${reset}

	* {
		box-sizing: border-box;
		font-style: normal;
		font-family: var(--font-PRE);
	}
	html,
	body {
		display: flex;
		flex-direction: column;
		width: 100vw;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	button {
		border: none;
		padding: 0;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	a {
		color: inherit;
		text-decoration: none;
	}

	p {
		padding: 0;
		margin: 0;
	}
	*::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}

	:root {
		--font-MBC: 'MBC';
		--font-PRE: 'Pretendard';

		--color-black : #303030;
		--color-white : #ffffff;
		--color-pink:  #ff0074;
		--color-sub-pink : #ff85ae;


	}

`;
export default GlobalStyle;
