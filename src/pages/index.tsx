import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '@assets/full_logo.svg';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '@api/index';
import TooltipBox from '@components/TooltipBox';

const Home = () => {
	const quesRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const [visibleTool, setVisibleTool] = useState(false);

	const handleTooltip = () => {
		if (!visibleTool) {
			setVisibleTool(true);
			setTimeout(() => {
				setVisibleTool(false);
			}, 2000);
		}
	};

	const handleClickEnter = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleMovePage();
		}
	};

	const handleMovePage = async () => {
		const text = quesRef.current?.value;
		const factoryText = encodeURIComponent(String(text));
		if (text && text.length >= 3) {
			const { status, data } = await request({ method: 'GET', url: `predict/${factoryText}` });
			if (status === 200) {
				navigate('/result', {
					state: {
						sentence: data.sentence,
						emotion: data.emotion,
					},
				});
			}
		} else {
			console.log('error');
			handleTooltip();
		}
	};

	return (
		<HomeContainer>
			<LogoSVGIcon onClick={() => navigate('/')} />
			<Menual>
				<Tips>
					<span>Tips</span> 꼭꼭 읽어주세요!!
				</Tips>
				<Lists>
					<li>
						본 사이트는 감성분석 AI 모델을 학습시키기 위해 데이터를 수집하는 목적으로 개발되었습니다
					</li>
					<li>단순 명사 및 3글자 이내의 경우 결과가 올바르지 않을 수 있습니다</li>
					<li>AI는 사용자 피드백을 토대로 학습하여 고도화할 예정입니다</li>
				</Lists>
				<InputSection
					type="text"
					ref={quesRef}
					placeholder="감성 분석할 문장을 입력해주세요 (3글자 이상)"
					onKeyDown={handleClickEnter}
				/>
			</Menual>
			<SendBtn onClick={handleMovePage}>결과 확인하기</SendBtn>
			{visibleTool && <TooltipBox txt="문장을 다시한번 확인해주세요" />}
		</HomeContainer>
	);
};
export default Home;

const HomeContainer = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 80px 0;

	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
		width: 0 !important;
	}
`;
const LogoSVGIcon = styled(LogoIcon)`
	max-height: 100px;
	margin-bottom: 60px;
	cursor: pointer;
`;

const Menual = styled.div`
	background-color: var(--color-white);
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 85%;
	max-width: 800px;
	padding: 50px 40px;
	border-radius: 20px;
`;

const InputSection = styled.input`
	appearance: none;
	border: 2px solid #e7e7e7;
	border-radius: 12px;
	height: 60px;
	width: 100%;
	max-width: 800px;
	padding: 0 16px;
	text-align: start;

	color: #7e7e7e;
	background-color: #ffffff;
	max-lines: 3;
	font-weight: 400;
	line-height: 140%;
	font-size: 16px;

	&:focus {
		outline: none;
		box-shadow: 0px 0px 10px 0px rgba(72, 72, 72, 0.15);
	}
`;

const SendBtn = styled.button`
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
		box-shadow: 0px 0px 10px 0px rgba(255, 113, 116, 0.4);
	}
`;

const Tips = styled.p`
	span {
		background-color: var(--color-pink);
		padding: 4px 8px;
		color: var(--color-white);
		border-radius: 20px;
		font-size: 14px;
		font-weight: 600;
		margin-right: 8px;
	}
	margin-right: auto;
	margin-bottom: 20px;
	font-weight: 600;

	font-size: 14px;
	color: var(--color-black);
`;

const Lists = styled.ul`
	width: 100%;
	padding-left: 18px;

	li {
		list-style-position: inside !important;
		text-indent: -18px !important;
		font-size: 14px;
		color: var(--color-black);
		font-weight: 400;
		line-height: 140%;

		&::before {
			content: '•';
			font-size: 110%;
			padding-right: 5px;
			color: var(--color-pink);
		}
		padding-bottom: 8px;
	}
	margin-bottom: 30px;
`;
