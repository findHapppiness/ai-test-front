import GlobalStyle from '@styles/globalStyle';
import styled from 'styled-components';
import '@styles/font.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages';
import Result from 'pages/result';

const App = () => {
	return (
		<AppContainer>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/result" element={<Result />} />
				</Routes>
			</BrowserRouter>
		</AppContainer>
	);
};

export default App;

const AppContainer = styled.div``;
