import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '@assets/full_logo.svg';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const quesRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const handleMovePage = () => {
		if (quesRef.current?.value) navigate('/result', { state: quesRef.current?.value });
	};
	return (
		<HomeContainer>
			<LogoSVGIcon />
			<InputSection type="text" ref={quesRef} placeholder="분석할 문장을 입력하세요" />
			<SendBtn onClick={handleMovePage}>결과 확인하기</SendBtn>
		</HomeContainer>
	);
};
export default Home;

const HomeContainer = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	padding: 100px;
	justify-content: center;
	flex-direction: column;
`;
const LogoSVGIcon = styled(LogoIcon)`
	height: 150px;
	margin-bottom: 70px;
`;

const InputSection = styled.input`
	appearance: none;
	border: 2px solid #e7e7e7;
	border-radius: 12px;
	height: 70px;
	width: 40%;
	padding: 0 16px;
	text-align: start;

	color: #7e7e7e;
	background-color: #ffffff;
	max-lines: 3;
	font-weight: 400;
	line-height: 140%;
	font-size: 20px;

	&:focus {
		outline: none;
		box-shadow: 0px 0px 10px 0px rgba(72, 72, 72, 0.25);
	}
`;

const SendBtn = styled.button`
	width: 20%;
	font-size: 20px;
	font-weight: 700;
	color: var(--color-pink);
	border: 1.5px solid var(--color-pink);
	padding: 20px 50px;
	margin-top: 60px;
	background-color: var(--color-white);
	border-radius: 12px;

	&:hover {
		opacity: 0.7;
		box-shadow: 0px 0px 10px 0px rgba(255, 113, 116, 0.2);
	}
`;
